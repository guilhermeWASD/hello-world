document.addEventListener("DOMContentLoaded", () => {
    
    const texto = document.body.querySelector("#texto")

    texto.addEventListener("click", () => {
        
        if (texto.textContent === "Hello World"){
            texto.textContent = "Olá Mundo";
        }
        else{
            texto.textContent = "Hello World";
        }

    });
});

function pais(id){
    switch(id){
        case "bra":
            document.body.querySelector("#texto").innerHTML = "Olá Mundo"; 
            break;
        case "eua":
            document.body.querySelector("#texto").innerHTML = "Hello World";
            break;
            case "jap":
                document.body.querySelector("#texto").innerHTML = "こんにちは世界(Kon'nichiwa sekai)";
                break;
            case "fra":
            document.body.querySelector("#texto").innerHTML = "Bonjour le Monde";
            break;
        
    }       
}