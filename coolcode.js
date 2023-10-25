
//const txt1 = document.getElementById();
const btn1 = document.getElementById("myButton");



document.getElementById("myButton").onclick = function(){

    var a = document.getElementById("liquor").value;
    var b = document.getElementById("abv").value;
    var c = document.getElementById("liquid").value;
    let liquor = Number(a);
    let abv = Number(b);
    let liquid = Number(c);
    let content = 0;
    content = (liquor*abv) / (liquid);

     console.log("Your alc content is",content);

     const out1 = document.getElementById("output1");
     out1.innerHTML = content;

     const out2 = document.getElementById("output2");
     let safety = "hi";
     if(content < 5 ){
        safety = "You're weak add more liquor you baby"
     }
     else if(content >= 5 && content <= 7){
        safety = "Ideal alcohol content not too strong but strong enough to get you where you need to be"
     }
     else if(content > 7 && content <= 10){
        safety = "You're probably gonna be borderline blackout but this is still somewhat safe"
     }
     else{
        safety = "You are probably gonna die"
     }
     out2.innerHTML = safety;
}




