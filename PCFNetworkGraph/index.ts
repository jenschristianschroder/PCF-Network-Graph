import {IInputs, IOutputs} from "./generated/ManifestTypes";
import DataSetInterfaces = ComponentFramework.PropertyHelper.DataSetApi;
type DataSet = ComponentFramework.PropertyTypes.DataSet;
import Cy from "cytoscape";

interface NodeData {
	id: string;
	content: string;
	recordId: string;
};

interface EdgeData {
	id: string;
	source: string;
	target: string;
	recordId: string;
};

export class PCFNetworkGraph implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private contextObj: ComponentFramework.Context<IInputs>;
	private mainContainer: HTMLDivElement;
	private graphContainer: HTMLDivElement;
	private cy: Cy.Core = require('cytoscape');

	private width: number;
	private height: number;

	private autoUpdate: boolean;

	private graphData: Cy.ElementDefinition[];
	private graphStyle: Cy.Stylesheet[];
	private graphLayout: Cy.LayoutOptions;

	private _notifyOutputChanged: () => void;

	private _graphDataSet: DataSet;
	/**
	 * Empty constructor.
	 */
	constructor()
	{

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
		this._notifyOutputChanged = notifyOutputChanged;

		let initialGraph: Cy.ElementDefinition[] = [ 
			{ group: "nodes", data: { id: "n0", content: "Node 1"} },
			{ group: "nodes", data: { id: "n1", content: "Node 2"} },
			{ group: "nodes", data: { id: "n2", content: "Node 3"} },
			{ group: "nodes", data: { id: "n3", content: "Node 4"} },
			{ group: "edges", data: { id: "e0", source: "n0", target: "n1" } },
			{ group: "edges", data: { id: "e1", source: "n0", target: "n2" } },
			{ group: "edges", data: { id: "e2", source: "n0", target: "n3" } }
		];

		this.mainContainer = document.createElement('div');
		this.mainContainer.id = 'mainContainer';
		this.mainContainer.style.position = 'absolute';
		this.mainContainer.style.minWidth = '100%';
		this.mainContainer.style.minHeight = '100%';
		this.mainContainer.style.border = '1px solid black';
		container.appendChild(this.mainContainer);

		this.cy = Cy({container: document.getElementById('mainContainer'), headless: false, elements: initialGraph});
		this.graphLayout = { name: 'preset' };
		this.cy.layout(this.graphLayout);
		if(this.autoUpdate)
			this.cy.layout(this.graphLayout).run();

		this.cy.on('mouseover', 'node', e => this.highlightOn(e.target));
		this.cy.on('mouseout', 'node', e => this.highlightOff(e.target));
		this.cy.on('tap', 'node', e => this.onNodeClick(e.target));
	
	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		this.contextObj = context;

		if(this.contextObj.parameters.width != null) {
			if(this.contextObj.parameters.width.raw != null) {
				if(this.contextObj.parameters.width.raw != 0)
					this.width = this.contextObj.parameters.width.raw;
					this.mainContainer.style.minWidth = this.width.toString() + "px";
			}		
		}

		if(this.contextObj.parameters.height != null) {
			if(this.contextObj.parameters.height.raw != null) {
				if(this.contextObj.parameters.height.raw != 0)
					this.height = this.contextObj.parameters.height.raw;
					this.mainContainer.style.minHeight = this.height.toString() + "px";
			}		
		}

		if(this.contextObj.parameters.autoUpdate != null) {
			if(this.contextObj.parameters.autoUpdate.raw != null) {
				if(this.contextObj.parameters.autoUpdate.raw != null)
					this.autoUpdate = this.contextObj.parameters.autoUpdate.raw;
					console.log(this.autoUpdate);
			}		
		}

		let useGraphDataSet = true;

		if(this.contextObj.parameters.graphData != null) {
			if(this.contextObj.parameters.graphData.raw != null) {
				if(this.contextObj.parameters.graphData.raw != "") {
					useGraphDataSet = false;	
					this.graphData = JSON.parse(this.contextObj.parameters.graphData.raw.toString());
				}
			}		
		}

		if(this.contextObj.parameters.graphStyle != null) {
			if(this.contextObj.parameters.graphStyle.raw != null) {
				if(this.contextObj.parameters.graphStyle.raw != "")
					this.graphStyle = JSON.parse(this.contextObj.parameters.graphStyle.raw.toString());
			}		
		}

		if(this.contextObj.parameters.graphLayout != null) {
			if(this.contextObj.parameters.graphLayout.raw != null) {
				if(this.contextObj.parameters.graphLayout.raw != "")
					this.graphLayout = JSON.parse(this.contextObj.parameters.graphLayout.raw.toString()) as Cy.LayoutOptions;
			}		
		}

		if(useGraphDataSet)
		// Read graph dataset
		if(!this.contextObj.parameters.graphDataSet.loading) {
			if(this.contextObj.parameters.graphDataSet.sortedRecordIds.length > 0)
			{
				this.graphData = [];
				// Loop through records
				for(let currentRecordId of this.contextObj.parameters.graphDataSet.sortedRecordIds) {

					let _group = this.contextObj.parameters.graphDataSet.records[currentRecordId].getValue("group");
					if(_group == "nodes") {
						let _data:NodeData = this.contextObj.parameters.graphDataSet.records[currentRecordId].getValue("data") as unknown as NodeData;
						let _classes = this.contextObj.parameters.graphDataSet.records[currentRecordId].getValue("classes");
						this.graphData.push(JSON.parse("{ \"group\": \"" + _group + "\", \"data\": { \"id\": \"" + _data.id + "\", \"content\": \"" + _data.content + "\", \"recordId\": \"" + currentRecordId + "\"}, \"classes\": \"" + _classes + "\" }"));
					}
					else if(_group == "edges") {
						let _data:EdgeData = this.contextObj.parameters.graphDataSet.records[currentRecordId].getValue("data") as unknown as EdgeData;
						let _classes = this.contextObj.parameters.graphDataSet.records[currentRecordId].getValue("classes");
						this.graphData.push(JSON.parse("{ \"group\": \"" + _group + "\", \"data\": { \"id\": \"" + _data.id + "\", \"source\": \"" + _data.source + "\", \"target\": \"" + _data.target + "\", \"recordId\": \"" + currentRecordId + "\" }, \"classes\": \"" + _classes + "\" }"));
					}
				}
			}
		}
		
		this.cy = Cy({container: this.mainContainer, headless: false, style: this.graphStyle, elements: this.graphData});
		this.cy.layout(this.graphLayout).run();
	}

	public onNodeClick(node: Cy.NodeSingular): void {
		let elementRecordId = node.data().recordId;
		if (elementRecordId) {
			const record = this.contextObj.parameters.graphDataSet.records[elementRecordId];

			this.contextObj.parameters.graphDataSet.setSelectedRecordIds([elementRecordId]);
			this.contextObj.parameters.graphDataSet.openDatasetItem(record.getNamedReference());

			this._notifyOutputChanged();
		}

	}

	public highlightOn(node: Cy.NodeSingular): void {
		this.cy.elements()
			.difference(node.outgoers()
				.union(node.incomers()))
			.not(node)
			.addClass('highlightOff');
		node.addClass('highlightOn')
			.outgoers()
			.union(node.incomers())
			.addClass('highlightOn');
		
	//	this.contextObj.events.OnClick
	}

	public highlightOff(node: Cy.NodeSingular): void {
		this.cy.elements()
			.removeClass('highlightOff');
		node.removeClass('highlightOn')
			.outgoers()
			.union(node.incomers())
			.removeClass('highlightOn');

	}
	

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs
	{
		return {};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}

}