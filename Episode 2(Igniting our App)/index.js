import React from "react";
import ReactDOM from "react-dom";

let heading=React.createElement("div",{id:"Parent"},
React.createElement("div",{id:"Child"},
[React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")]
));

let root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);