import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = ()=>{
    return <h1>Hi this is heading component</h1>
}

// this above code is can also be written as

const HeadingComponent2 = ()=> <h1>Hi this is heading component2</h1>;

// also like this

const HeadingComponent3 = ()=>( <h1 className="heading3">Hi this is heading component 3</h1> );

// we can also put one func component into other , it is called component composing

// without return
const Para  = ()=> (
    <>
    <div id="container1">
        <HeadingComponent />
        <h2>All the func comps are nestet here , it is called componnent composing</h2>
        <HeadingComponent2/>
    </div>
    <div id="constainer2">
        <h3>tHIS IS including sibling elements , we wrap in empty tags</h3>
        <HeadingComponent3 />
    </div>
    </>
);

// with return and anonymous functions 
const Para2  = function () {
    return <>
    <div id="container1">
        <HeadingComponent />
        <h2>All the func comps are nestet here , it is called componnent composing</h2>
        <HeadingComponent2/>
    </div>
    <div id="constainer2">
        <h3>tHIS IS including sibling elements , we wrap in empty tags</h3>
        <HeadingComponent3 />
    </div>
    </>
};




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Para2 />);