function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML =`Agora são ${hora} horas!`
    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#e2d0c2'
        

    } else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#da723d'
        


    } else{
        img.src = 'imagens/noite.png'
        document.body.style.background = '#003f5c'
    }



}