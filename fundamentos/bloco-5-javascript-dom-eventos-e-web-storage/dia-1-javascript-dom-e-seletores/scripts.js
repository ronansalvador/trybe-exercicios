const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

document.getElementById("page-title").innerText = "O titulo do Ronan";

const secondParagraph = document.getElementById("second-paragraph");

secondParagraph.style.color = "yellow";

let paragrafos = document.getElementsByClassName("paragrafo");

paragrafos[0].style.color = "green";
paragrafos[1].style.color = "yellowgreen";


document.getElementsByTagName("h4")[0].style.color = "red";