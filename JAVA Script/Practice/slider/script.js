var counter = 1;
function slider(a){
    var abc = document.getElementById('image');
    counter = counter + a ;
    if(counter > 6 ){
        counter = 1;
    }
    if(counter < 1  ){
        counter = 6;
    }
    abc.src = "wallpapers/image" + counter + ".jpg"; 

}
