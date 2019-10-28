function solve(){
    document.getElementById('codeEditor').innerHTML = ".game{\r\ndisplay: grid;\r\ngrid-template-columns: repeat(3,1fr);\r\n}\r\n\r\n.p1{ grid-area: 1/3/2/4 }\r\n.p6{ grid-area: 1/2/2/3 }\r\n.p5{ grid-area: 2/2/3/3 }\r\n.p9{ grid-area: 2/1/3/2 }\r\n.p8{ grid-area: 2/3/3/4 }\r\n.p7{ grid-area: 3/1/4/2 }\r\n";
}

function solveTwo(){
    document.getElementById('codeEditor').innerHTML = ".game{\r\ndisplay: grid;\r\ngrid-template-columns: repeat(3,1fr);\r\ngrid-template-areas:\r\n'b f a'\r\n'i e h'\r\n'g c d'\r\n}\r\n\r\n.p1{ grid-area: a }\r\n.p2{ grid-area: b }\r\n.p3{ grid-area: c }\r\n.p4{ grid-area: d }\r\n.p5{ grid-area: e }\r\n.p6{ grid-area: f }\r\n.p7{ grid-area: g }\r\n.p8{ grid-area: h }\r\n.p9{ grid-area: i }\r\n";
}

function reset(){
    document.getElementById('codeEditor').innerHTML = ".game{\r\ndisplay: grid;\r\ngrid-template-columns: repeat(3,1fr);\r\n}";
}

document.getElementById('solve').addEventListener("click",solve);
document.getElementById('solveTwo').addEventListener("click",solveTwo);
document.getElementById('reset').addEventListener("click",reset);