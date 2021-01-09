//JS code for ToDO App

// Create an array named list to store our to-do activities
var listOfActivities=[];

// Create a DOM variable name input to get the to-do activities added from HTML form
var input=document.getElementById("input");

//Create a DOM variable todolist ul tag (unordered list)
var toDoList=document.getElementById("todolist");
 
//Using onclick to run the click function when button is clicked
document.getElementById("button").onclick=click;

// Adding a to-do activity
function click(){
    
    //Using push array operation to add the input todo activity to the list created earlier
    listOfActivities.push(input.value);

    console.log(listOfActivities);

    // Giving Empty string to input value after pushing it to array
    input.value="";
    //Calling a function showList(); to display the todo activities present in the list after adding new element 
    showList();
}

function showList(){
    toDoList.innerHTML="";

    listOfActivities.forEach(function(current_value, index){
        
        toDoList.innerHTML+=("<li>"+current_value+"<a onclick='editItem("+index+")'>edit</a>"+
        "<a onclick='deleteItem("+index+")'>&times |</a></li>")
    })
}

function editItem(index){
    var newValue=prompt("Please insert your value");

    listOfActivities.splice(index,1,newValue);

    showList();
}

function deleteItem(){
    listOfActivities.splice(index,1);

    showList();
}