// now we will do the same operations by installing react modules rather than cdn links

// first we are builduing a dev built using parcel
// then installing react and react dom 

// since we are not using cdn , we need to import react modules
import React from "react";
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div",{id:"parent"},
                [React.createElement("div",{id:"child1"},[
                React.createElement("h1",{},"Hello h1 from child1"),React.createElement("h1",{},"Hello h2from child1")]),
                React.createElement("div",{id:"child2"},[
                React.createElement("h1",{},"Hello h1 from child2"),React.createElement("h1",{},"Hello h2from child2")])]
                );
console.log('parent', parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
