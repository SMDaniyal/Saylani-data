var name=prompt("Enter Your Name","Your Name");
var fname=prompt("Enter Your Father Name","Your Father Name");
var batch=prompt("Enter Your Batch","4.0");
var rollNo=prompt("Enter Your Roll No","9999");
var html=parseInt(prompt("Enter Your Percentage In HTML","Html %age"));
var css=parseInt(prompt("Enter Your Percentage In CSS","CSS %age"));
var js=parseInt(prompt("Enter Your Percentage In Javascript","Javascript %age"));
var add=(html+css+js);
var avg=(add/3);
document.getElementById('sname').innerHTML=name;
document.getElementById('fname').innerHTML=fname;
document.getElementById('bno').innerHTML=batch;
document.getElementById('rno').innerHTML=rollNo;
// document.getElementById('avg').innerHTML=avg;

//condiotion for grade in var CSS
if(html>=90){
   document.getElementById('html').innerHTML=html + "%" +"  A+ grade";
}
else if(html>=80){
document.getElementById('html').innerHTML=html + "%" +"  A grade";
}
else if(html>=70){
    document.getElementById('html').innerHTML=html + "%" +"  B grade";
}
else if(html>=60){
    document.getElementById('html').innerHTML=html + "%" +"  C grade";
}

else if(html<60){
    document.getElementById('html').innerHTML=html + "%" + "  You are fail in your test";
}
//condiotion for grade in var CSS
if(css>=90){
   document.getElementById('css').innerHTML=css + "%" +"  A+ grade";
}
else if(css>=80){
document.getElementById('css').innerHTML=css + "%" +"  A grade";
}
else if(css>=70){
    document.getElementById('css').innerHTML=css + "%" +"  B grade";
}
else if(css>=60){
    document.getElementById('css').innerHTML=css + "%" +"  C grade";
}

else if(css<60){
    document.getElementById('css').innerHTML=css + "%" + "  You are fail in your test";
}
//condiotion for grade in var js
if(js>=90){
   document.getElementById('js').innerHTML=js + "%" +"  A+ grade";
}
else if(js>=80){
document.getElementById('js').innerHTML=js + "%" +"  A grade";
}
else if(js>=70){
    document.getElementById('js').innerHTML=js + "%" +"  B grade";
}
else if(js>=60){
   document.getElementById('js').innerHTML=js + "%" +"  C grade";
}
else if(js<60){
    document.getElementById('js').innerHTML=js+ "%" + "  You are fail in your test";
}

//condiotion for grade in var avg

if(avg>=90){
   document.getElementById('avg').innerHTML=avg + "%" +"  A+ grade";
}
else if(avg>=80){
document.getElementById('avg').innerHTML=avg + "%" +"  A grade";
}
else if(avg>=70){
    document.getElementById('avg').innerHTML=avg + "%" +"  B grade";
}
else if(avg>=60){
   document.getElementById('avg').innerHTML=avg + "%" +"  C grade";
}
else if(avg<60){
    document.getElementById('avg').innerHTML=avg+ "%" + "  Your Overall Percentage is not Good :( ";
}