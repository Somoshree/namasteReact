const heading = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am h1 tag!"),React.createElement("h2",{},
"I am h2 tag!")]));

console.log(heading);   //heading is a React element, i.e., a javascript object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);