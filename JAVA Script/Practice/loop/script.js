// var arr = [1,2,3,5,4,10,55,41,6,8,7,2,5,6,4,1,22,55,46,15,36,254,984,246,7,79,799,211,34,6545,845];
// var userInput=parent(prompt("Enter value To know if they Exist in Data or not"));

var userInput = prompt("Enter Book Name");

var books=["Git Essential","HTML and CSS","A Smarter Way to Learn Javascript"];

for(i=0;i<books.length;i++)
    {
        if(userInput==books[i]){
            document.write("We have the Book")
            break;
            }
        else{
            document.write("No Book found")
            }
    }