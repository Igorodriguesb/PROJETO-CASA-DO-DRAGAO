
//Passo 1:
const botoesCarrossel = document.querySelectorAll(".botao");


botoesCarrossel.forEach((botao) => {
    botao.addEventListener("click", () => {
        const botaoSelecionado = document.querySelector("selecionado");
        botaoSelecionado.classList.remove("selecionado");
    
    
    
    
    
    
    
    })
})


/*
//Passo 2:
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        //Passo 3:
        const botaoSelecionado = document.querySelector("selecionado");

        botaoSelecionado.classList.remove("selecionado");

        //Passo 4:
        botao.classList.add("selecionado");

        //Passo 5:
        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa")

        //Passo 6:
        console.log(indice);
        
    
    
    
    
    
    
    
    
    
    
    });
});

*/