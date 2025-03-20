// Ao carregar a página executa as funções de buscar os dados
document.addEventListener("DOMContentLoaded", async () => {
    setTimeout(() => {
        toggleLoading();
    }, 2000);
});

    let trendingContainer = document.querySelector("#trendingMovies");
    trendingContainer.innerHTML = "";
    for (let i = 1; i <= 20; i++) {
        trendingContainer.innerHTML += `<a href='detalhes.html?id=${i}'>
            <img src='img/posters/${i}.jpg' alt='${i}'>
        </a>`;
    }


// Trending Movies Scroll
const containerTrendingMovies = document.getElementById("trendingMovies");

let ScrollIntervalTrendingMovies; //Controlador para o intervalo de scroll
let ScrollDirectionTrendingMovies =0; //Direção do scroll (0 = parado, 1=direita, -1= esquerda)

containerTrendingMovies.addEventListener("mousemove", (e) => {
    const boudingRect = containerTrendingMovies.getBoundingClientRect();
    const mouseX = e.clientX;

    const threshold  = 200; //Distância das bordas para ativar o scroll

    if (mouseX <boudingRect.left + threshold){
        ScrollDirectionTrendingMovies = -1 // Scroll para a esquerda
        containerTrendingMovies.style.cursor = "url('/img/arrow-left.png'), auto"; //Cursor para a esquerda
    } else if (mouseX > boudingRect.right - threshold){
        ScrollDirectionTrendingMovies = 1; //Scroll para a direita
        containerTrendingMovies.style.cursor = "url('/img/arrow-right.png'), auto"; //Cursor para a direita
    } else {
        ScrollDirectionTrendingMovies = 0; //Parar scroll
        containerTrendingMovies.style.crusor = "pointer"; //Cursor padrão
    }
});

containerTrendingMovies.addEventListener("mouseleave", () => {
    ScrollDirectionTrendingMovies = 0; // Parar scroll quando o mouse sai do elemento
    containerTrendingMovies.style.cursor = "default"; //Resetar cursor
});

//Função para scroll contínuo
function autoScrollTrendingMovies(){
    if(ScrollDirectionTrendingMovies !== 0){
        containerTrendingMovies.scrollLeft += ScrollDirectionTrendingMovies *6; //Ajuste a velocidade (5 = rápido)
    }
}

ScrollIntervalTrendingMovies = setInterval(autoScrollTrendingMovies, 16); // ~60 FPS