
const coracao = document.getElementById("coracao");

function comecarBater() {

    coracao.classList.add("batendo");
}


function pararBater() {
   
    coracao.classList.remove("batendo");
}


coracao.addEventListener("mouseover", comecarBater);


coracao.addEventListener("mouseout", pararBater);

