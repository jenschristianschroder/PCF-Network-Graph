import {IInputs, IOutputs} from "./generated/ManifestTypes";
import DataSetInterfaces = ComponentFramework.PropertyHelper.DataSetApi;
type DataSet = ComponentFramework.PropertyTypes.DataSet;
import Cy from "cytoscape";
import CytoscapeComponent from "react-cytoscapejs";

export class PCFNetworkGraph implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private contextObj: ComponentFramework.Context<IInputs>;
	private mainContainer: HTMLDivElement;
	private graphContainer: HTMLDivElement;
	private cy: Cy.Core = require('cytoscape');
	private n: Cy.NodeSingular

	private graphData: [];
	private graphStyle: [];
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
		// Add control initialization code
		this.mainContainer = document.createElement('div');
		this.mainContainer.id = 'mainContainer';
		this.mainContainer.style.position = 'absolute';
		this.mainContainer.style.minWidth = '800px';
		this.mainContainer.style.minHeight = '800px';
		this.mainContainer.style.border = '1px solid black';
		container.appendChild(this.mainContainer);
		this.graphContainer = document.createElement('div');
		this.graphContainer.id = 'graphContainer';
		this.mainContainer.appendChild(this.graphContainer);

		this.cy = Cy({container: document.getElementById('graphContainer')});
	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		this.contextObj = context;

		if(this.contextObj.parameters.graphData != null){
			if(this.contextObj.parameters.graphData.raw != null) {
				this.graphData = JSON.parse(this.contextObj.parameters.graphData.raw.toString());
			}		
		}

		if(this.contextObj.parameters.graphStyle != null){
			if(this.contextObj.parameters.graphStyle.raw != null) {
				this.graphStyle = JSON.parse(this.contextObj.parameters.graphStyle.raw);
			}		
		}
		// Read records from dataset
		if(!this.contextObj.parameters.graphDataset.loading){
			if(this.contextObj.parameters.graphDataset.sortedRecordIds.length > 0)
			{

				// Loop through records
				for(let currentRecordId of this.contextObj.parameters.graphDataset.sortedRecordIds){
					// Alias workaround
/* 
					var idColumn = this.contextObj.parameters.graphData.columns.find(x => x.alias === "id");
					var idColumnName = idColumn == null ? "id" : idColumn.name;
					var fillColumn = this.contextObj.parameters.graphData.columns.find(x => x.alias === "fill");
					var fillColumnName = fillColumn == null ? "fill" : fillColumn.name
 */					
					// Find referenced SVG elements
					// var svgObjCollection = document.getElementsByClassName(this.contextObj.parameters.graphData.records[currentRecordId].getFormattedValue(idColumnName).toLowerCase().replace(/\s/g, ""));
					
/* 					// Set fill color of found SVG elements
					for (let i = 0; i < svgObjCollection.length; i++) {
						let svgObj = <SVGElement>svgObjCollection[i];
						if(svgObj != null){
							if(fillColumn != null) {
								svgObj.style.fill = this.contextObj.parameters.graphData.records[currentRecordId].getFormattedValue(fillColumnName);
							}
							// Add onclick event to SVG element
							svgObj.addEventListener("click", this.onElementClick.bind(this));
	
							// Set the recordId on the SVG element
							svgObj.setAttribute(elemRecordId, currentRecordId);
						}
					} */
				}
			}
		}


		this.cy = Cy({container: this.mainContainer, style: this.graphStyle, layout: {name: 'random'}, elements: this.graphData});
		this.cy.nodes().forEach(n => {
			if(n.data().borderColor != null)
				n.style("borderColor", n.data().borderColor);
		});
		console.log(this.cy);

		Array.from(document.getElementsByTagName('canvas')).forEach(element => {
			element.style.left = '0';
		});
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