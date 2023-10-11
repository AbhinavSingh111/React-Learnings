import React from "react";
import ReactDOM from "react-dom/client";

const headingJsx = <h1 id="xxx" className="first-heading">Heading via JSX</h1>;

// the above line will first get converted to react element which will convert it to react obj(ie js obj)
// then it will get rendered , the transpilation part is done by babel in node_modules

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingJsx);