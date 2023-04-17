    const mysql = require('mysql2');

    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '151212',
    database: 'historia_colaborativa'
    });

    connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
    });
    
    
    document.getElementById("historia").addEventListener("keydown", function(event) {
        // Check if "Enter" key was pressed
        if (event.keyCode === 13) {
        event.preventDefault(); // prevent form submission
        document.querySelector("form button[type='button']").click(); // click the "Add to List" button
        }
    });
    
    function addToList(event) {
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
           
//adicionando o MySQL

        connection.query(`INSERT INTO list (text) VALUES ('${input}')`, function (error, results, fields) {
            if (error) throw error;
            console.log('Saved to database!');
          });
        }
      
        document.querySelector('form').addEventListener('submit', addToList);

