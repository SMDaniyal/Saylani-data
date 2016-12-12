// // // //1
// 	var	a = "we are the best developer in the world";
// 	// alert(a);
// 	// a = a.replace("the","by far the");
// 	// alert(a);
// 	a = a.replace(/the/g," not the");
// 	alert(a);

// // //2

// // var x = prompt("enter x");

// // var y = prompt("enter y");

// // if ( (x<=10 || x=>20) && (y<=20 || y=>30) ) {
// // 	alert("done");
// // }
// // //inclusive ???????????????????



// // //3
// // var a = 20%2;
// // alert(a);

// // //true



// // //4


// // var a = 20*2;
// // alert(a);
// // //true
// // */

// // //5

// // var 4num = 33;
// // alert(4num);

// // //false

// // //6
// // var b = Math.round(1.5) + Math.round(-1.5) + Math.ceil(1.0000001) + Math.floor(.99999);

// // //alert(b);

// // //ans : 3


// // //7

// // //true



// var a = 1;
// var b = 3;
// function dani (a,b) {
// 	return a+b;
// }


// // //true

// function (var a,var b){
// 	return a+b;
// }
// //false
// // func (int a, int b){
// // 	return a+b;
// // }

// //false
// func (var a , var b){
// 	return a+b;
// }

// //8
// var weight = 300;
// age = 16;
// gender = "male";

// if (weight > 300 && time < 6 && age > 17 && gender === "male") {
// 	alert("Come to our tryout!"); 
// 	}
// 	else {   
// 		alert("Come to our cookout!");  
// 	}
 
//  //ans: come to our cookout

 

//  //9

//  if (SAT > avg || GPA > 2.5 || sport === "football") {  
//  	alert("Welcome to Bubba State!"); 
//  } 
//  else { 
//     alert("Have you looked into appliance repair?"); 
//      }
// //ans: welcom to baba



// //10

// var x = 2;

// if (x >2 ) {

// }else{
// 	x = x+2;
// 	alert(x+1);
// }

// //ans: 5



// //11

// /*statment (B);*/


// //12
// 	var pets = [];
// 	pets[3] = "lizard";
// 	pets[6] = "snake";
// 	alert(pets[0]);

// 	//ans: undefined



// //13

// var pets = ["dog","cat","lizard"];
// pets.push("fish", "ferret");
// alert(pets);



// //14

// pets.splice(2, 2, "pig", "duck", "emu");



// //15

// var noPets = pets.slice(2, 4);


// // 16

// var cleanestCities = ["Atlanta", "Baltimore", "Chicago", "Tucson", "Los Angeles", "Seattle"];
// var numElements = cleanestCities.length;
// var matchFound = false;

// var cityToCheck = "Tucson";

// for (var i = 0; i < numElements; i++); 
// 	if (cityToCheck === cleanestCities[i]) { 
// 	matchFound = true; 
// 	alert( cleanestCities[i++] + "It's one of the cleanest cities"); 
// 	break; 
// 	} 
// 	if (matchFound === false) { 
// 	alert("It's not on the list");
// 	}
//      //ans: tucson





// //17
// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "]; 
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"]; 
// var fullNames = []; 
// 	for (var i = 0; i <= firstNames.length; i++) {

// 		for (var j = 0; j <= lastNames.length; j++) { 
// 			fullNames.push(firstNames[i] + lastNames[j]);
// 		}
// 	}
// alert(fullNames[2]);

// //ans:BlueRay Dogbone



// //18

// indexOf(the world);

// //19

// var text = "We are the best developer in the world";
// var firstChar = text.indexOf("the world"); 
// 	if (firstChar !== -1) { 
// 	text = text.slice(0, firstChar) + "asia" + text.slice(firstChar + 12); 
// }


// //kuch 36 kar k index gina tha mene

// //ans: We are the best developer in asia. //not (in the asia).





// //20

// var bigDecimal = Math.random(); 
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfStars = Math.round(improvedNum);

// alert(numberOfStars);

// round karney sy 7 b ara he.. agar math.round howa tw 1 - 7




// //21

// alert("55"+5-5);
// //ans: 550



// //23

// get date and time method

// //24

// getTime();

// //25

// function(){

// }(2);

// //ans: undefine

// //26

var dayOfWk = "Sat";
switch(dayOfWk) { 
	case "Sat" :  
		alert("Whoopee"); 	
	case "Sun" : 
	alert("Whoopee"); 
	case "Fri" : 
		alert("TGIF!"); 
	default : 
		alert("Shoot me now!"); 
}

// //ans: prints all alert


// //27

// while


// //28

// if (a.length == 0) {
// 	alert("Empty Array");
// }
// else{
// 	do{
// 	alert(i); 
// 	; 
// } while (i++ <= a.length);

// //is type ka ik qustion the js k ans theory me phochy they k wo length 0 ki equal krega, yaa array ko order sy print kar dega , yaa reverse order me print krega , yaa "empty array print karega",... mene print in order array pe lagaya he.


// //29

// if (a = 4 || x = 1 && y = 1) {


// }

// //either 4 , both x and y

// //30

// pets[0];


// //31

// if (a < 5) {
// 	a = 6;
// }else{
// 	a = 7;
// }

// //ans: a>5 { a = 7;} else { a = 6;}


// //32 // done

// ( (x<=10 || x>20 ) && ( y<20|| y>30) )

// //unhou ne inclusive ka phocha tha or options me 1 ye or 1 ye thikh laga..

// ( (x<=10 || x>=20 ) && ( y<=20|| y>=30) )

// //mene uper waly per lagaya 



// //33

// nested if



// //34 //done

// asia

// //replace waly method me


// //35 //done

// alert("");
// alert('');
// window.alert("");
// window.alert('');
// alert  (  "  "  );
// window.alert( " " );



// //ans: all are true

// //36 //done

// indexOf(the world) 


// //37 // done

// toLowerCase

// //38 // done

// for (var i = 0; i < 10; i++) {
// 	for(var j = 0; j < 5 ; j++){

// 	}
// }
// //how many time loop will run?
// //nested loop waly ka ans 50



// //39 // done

// for (var i = 0 ; i < 31 ; i=i+2) {
// 	Things[i]
// }
// //how many time loop will run
// //ans : 16



// //40  // done

// var a = 1 + 3 * 4;
// //ans: 13  


// //41 // done

// alert("2 plus 2  is equal to " + 2 + 2);
// //2 plus 2 is equal to 22




// //42 /// done

// var num = 1;
// num = num++;
// alert(num);

// //ans: 1


// //43

// for () loop

// intialization, condition , updation
// intialization, condition , edition           // done
// intialization, increment
// condition , increment , intialization



// //ans: 1

