    document.getElementById("historia").addEventListener("keydown", function(event) {
        // Check if "Enter" key was pressed
        if (event.keyCode === 13) {
        event.preventDefault(); // prevent form submission
        document.querySelector("form button[type='button']").click(); // click the "Add to List" button
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