    //function pegarTextoHistória() {
    //    const campoTexto = document.querySelector("#formHistoria");
    //    console.log(campoTexto.value);
   // }


    function executar(){
        var texto= document.getElementById('historia').value;
        var lista = document.getElementById('historico');
        var adicionar = true;

        var opt = document.createElement('resultado');

        for(i=0; i <lista.resultado.lenght; i++) {
           if(texto==lista.resultado[i].value){
               adicionar=false;
  
           } 
           if(adicionar==true){
               opt.value=texto;
               lista.appendChild(opt);        
               
           }
        
        }


    //function receberTextoHistoria() {
     //   var textoHistoria = document.getElementById("form_Historia").value;
      //  console.log(textoHistoria);


    //   document.getElementById("resultado").innerHTML = textoHistoria
    

       //const minha_propriedade = localStorage.getItem('valor_Historia');
       //alert("Valor:" + minha_propriedade);
    }
