function gerarInputs(){
    // Vamos refernciar o documento HTML 
    const body=document.body;
    // Criar um elemento de titulo(h1)

    const  h1= document.createElement("h1")
    h1.innerHTML = "Criar Elementos"
    // Vamos adcionar o elemento h1 ao body

    body.appendChild(h1);// adicionar um elemneto filho
    // criar um elento de formulario 
    const form= document.createElement("form");
    //adcionar um atriburo ao elemento form
    form.setAttribute("id","cadastro");

    var ninput = 0;
    while(ninput <10){
        let caixa = document.createElement("input")
        // adicionar o atributo type
        caixa.setAttribute("type","text")

        //adicionar o atributo id
        caixa.setAttribute("id","caixa"+ninput)

        // adicionar o elemento input(caixa) ao form
        form.appendChild(caixa);
        ninput++;
    }

    body.appendChild(form);// adicionar o formulario ao body

    for(let inp = 0; inp <10 ; inp++){
          var estilo = document.getElementsByTagName("input")[inp].style ;
          estilo.display= "block";
          estilo.width = "80%";
          estilo.padding = "10px";
          estilo.margin ="10px";
          estilo.fontFamily = "arial";
           
    }


    
}