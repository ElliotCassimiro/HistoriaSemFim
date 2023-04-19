    document.getElementById("historia").addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
        event.preventDefault(); 
        document.querySelector("form button[type='button']").click();
        }
    });
    
    function addToList() {
        event.preventDefault();
        var input = document.getElementById("historia").value;
        
                   
        if (input === "") {
            alert("Digite algo!");
            return;
        }
           
        var listItem = document.createElement("li");
            
        listItem.innerHTML = input;
            
        document.getElementById("myList").appendChild(listItem);
           
        document.getElementById("historia").value = "";      
        
    }

    