var p1name=prompt("Enter name of player 1");
var p2name=prompt("Enter name of Player 2");
document.querySelector(".p1").innerHTML=p1name;
document.querySelector(".p2").innerHTML=p2name;
// img1
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImageSource1="dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSource1);
// img2
var randomNumber2=Math.floor(Math.random()*6)+1;
var randonImageSource2="dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src" , randonImageSource2);
// Comparison
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩" + p1name +" Won";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML= p2name + " won 🚩";

}
else{
  document.querySelector("h1").innerHTML="🚩Draw🚩";
}
