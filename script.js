   

    function receberTextoHistoria() {
        var textoHistoria = document.getElementById("form_Historia").value;
        console.log(textoHistoria);


       document.getElementById("resultado").innerHTML = textoHistoria;
       localStorage.setItem("resultado", textoHistoria);

       //const minha_propriedade = localStorage.getItem('valor_Historia');
       //alert("Valor:" + minha_propriedade);
    }
