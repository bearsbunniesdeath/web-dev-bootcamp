$(document).ready(function() {
    var todos = ["Buy new turtle"];

    var input = prompt("What would you like to do?");
    
    while(input !== "quit") {
        if (input === "list") {
            console.log("**********");
            todos.forEach(function(todo, idx) {
                console.log(idx + ": " + todo);
            });
            console.log("**********");
        } 
        else if (input === "new") {
            var newTodo = prompt("Enter new todo");
            todos.push(newTodo);
        }
        else if (input === "index") {
            var idxToDelete = prompt("Enter index of todo to delete");
            todos.splice(idxToDelete, 1);
            console.log("Deleted Todo");
        }
        input = prompt("What would you like to do?");
    }
    console.log("OK, YOU QUIT THE APP");
}); 