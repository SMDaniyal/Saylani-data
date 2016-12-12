var arr = [];
function func(){
    var abc = document.getElementById('input').value;
    arr.push('abc');
    document.getElementById('div').innerHTML = "<ol>" + "<li>" + abc  + "<button onclick = 'remove()'>" + "x" + "</button>" + "</li>" + "</ol>";

}
function remove(){
    
}

