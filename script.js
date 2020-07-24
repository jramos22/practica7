function color() {//Esta funcion genera el color aleatorio
    let b ='';
    for (let i = 0; i < 4; i++) {
        a = Math.floor(Math.random() * (256 - 0) + 0);
        a = a.toString();
        if(i==0){
            b='rgb(';
        }else if (i==1) {
            b= b + a + ',';
        }else if (i==2) {
            b= b + a + ',';
        }else if (i==3) {
            b= b + a + ')';
        }else{

        }
        
    }
    return b;
}

function parrafo() { //Esta funcion envia el estilo a los
    let parrafos = document.querySelectorAll('.contenedor p');
    for (let j = 0; j < parrafos.length; j++) {
        let c = color().toString();
        parrafos[j].style.color = c;
    }
}

parrafo();


