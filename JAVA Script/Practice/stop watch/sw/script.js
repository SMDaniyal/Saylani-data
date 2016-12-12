var sec = 0;
var min = 0;
var hour = 0;
var a;

function stopWatch(){
    
    sec++;
    if(sec == 60){
        sec=0;
        min++;
        if(min == 60){
            min=0;
            hour++
        }
    }
    document.getElementById('main').innerHTML= "<h1>"+ hour + ":" + min + ":" + sec +"</h1>";
}
setInterval(stopWatch,1000);


function reset(){
    sec = 0;
    min = 0;
    hour = 0;
    clearInterval(a)
}