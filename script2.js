console.log(window.location.href);

let url = window.location.href;
let valor = url[url.length-1];

const data = document.querySelector(".textContainer_result");

data.textContent = `You selected ${valor} out of 5`;




