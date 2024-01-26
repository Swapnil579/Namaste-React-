// let heading=React.createElement("h1",{},"This is a heading tag");
// let root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//<div id="parent">
//<div id="child">
// <h1>I'm h1 tag </h1>
//</div> 

//  let heading=React.createElement("div",{id:"Parent"},React.createElement("div",{id:"Child"},React.createElement("h1",{},"I'm h1 tag")));
//  let root=ReactDOM.createRoot(document.getElementById("root"));
//  root.render(heading);

let heading=React.createElement("div",{id:"Parent"},
React.createElement("div",{id:"Child"},
[React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")]
));

let root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);