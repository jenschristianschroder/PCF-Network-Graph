# PCF Network Graph

A Power Apps custom control that implements [cytoscape.js](https://js.cytoscape.org/) network graph library.
Cytoscape.js is a highly configurable and flexible library for visualizing network graphs.

# Features

* Display an interactive graph 
  * Select nodes
  * Highlight on hover
  * Search for nodes
* Apply you own style using css stylesheets (see https://js.cytoscape.org/#style/node-body) for details.
* Multiple layout algorithms (see https://js.cytoscape.org/#layouts) for details

# Configuration

1. configure the graphData or items property of the control. If graphData is set the items property will be disregarded. This makes it simpler to debug as you can change your graph inline.
2. Optionally configure the styling. If not it will use cytoscape default styling
3. Optionally configure the layout. If not it will use cytoscape default layout

# Demo

![CPAL Data Model Explorer](https://github.com/jenschristianschroder/CPAL-Data-Model-Explorer/blob/main/docs/CPAL%20Data%20Model%20Explorer.gif)

# Example Power Apps implementation

CDS Data Model Explorer (https://github.com/jenschristianschroder/CPAL-Data-Model-Explorer)
