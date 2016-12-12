var sec = 0;
var min = 0;
var hour = 0

function watch(){
    sec++;
    if(sec==5){
        sec=0;
        min++;
        if(min==5){
            min=0;
            hour++

        }
    }
    document.getElementById('main').innerHTML ="<h1>" + hour + ":" +  min + ":" + sec + "</h1>" ;
}


setInterval(watch,1000);

function stop(){
    sec=0;
    min=0;
    hour=0;
    document.getElementById('reset').innerHTML ="<h1>" + hour + ":" +  min + ":" + sec + "</h1>" ;
}
