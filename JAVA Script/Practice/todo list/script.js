// function todo(){
//      var input1 = document.getElementById('user_input').value;
//         if(input1 == ""){
//         alert("Enter anything for list");
//     }
// else{

//     var text = document.createTextNode(input1);
//     var list = document.createElement("li");
//     list.appendChild(text);
//     document.getElementById("list").appendChild(list);
//     }
// }   


var arr = [] ;
function todo(){
     var input = document.getElementById('user_input').value;
     if(input == "" || input == " "){
         alert("You need to write something");
     }
     else{
         arr.push(input);
     }
    var list = document.getElementById('list');
    var data = "";
    for(i=0;i<arr.length;i++){
       data +=  "<li>" + arr[i] + "<button id = 'remove' onclick = 'button()'> X </button>" +"</li>" ;
       list.innerHTML = data ; 

    }
}
function button (){
    document.getElementById('remove').className = "abc"
}