// document.querySelector("#root").innerHTML="<h1>Namaste React</h1>";

// // or

// const heading = document.createElement("h1");
// heading.innerHTML="Second method";
// const rootjs = document.getElementById("root");
// rootjs.appendChild(heading );


// react code

// const heading3 = React.createElement("h1",{id:"ab",abs:"de"},"Hello From React");

// creating a nested structure


/* <div id ="parent">
    <div id ="child1">
        <h1>Hello h1 from child 1</h1>
        <h1>Hello h2 from child 1</h1>
    </div>
    <div id ="child2">
        <h1>Hello h1 from child 1</h1>
        <h1>Hello h2 from child 1</h1>
    </div>
</div> */

const parent = React.createElement("div",{id:"parent"},
                [React.createElement("div`",{id:"child1"},[
                React.createElement("h1",{},"Hello h1 from child1"),React.createElement("h1",{},"Hello h2from child1")]),
                React.createElement("div",{id:"child2"},[
                React.createElement("h1",{},"Hello h1 from child2"),React.createElement("h1",{},"Hello h2from child2")])]
                );
console.log('parent', parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
