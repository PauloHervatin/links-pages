function toggleMode(){
    const html = document.documentElement 
    
    html.classList.toggle('light')

    //pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if(html.classList.contains('light')){
    //se tiver light mode, adicionar a imagem
        img.setAttribute('src', './assets/EU-light.png')
    } else{
    //light, SE não tiver light mode, manter nomal
    img.setAttribute('src', './assets/eu.png')

    }
}

    