var randommNumber1=Math.floor(Math.random()*6+1);

var randommNumber2=Math.floor(Math.random()*6+1);

if(randommNumber1===1){
    document.querySelector(".img1").setAttribute("src","dice1.png")
}

if(randommNumber1===2){
    document.querySelector(".img1").setAttribute("src","dice2.png")

}
if(randommNumber1===3){
    document.querySelector(".img1").setAttribute("src","dice3.png")
}

if(randommNumber1===4){
    document.querySelector(".img1").setAttribute("src","dice4.png")
}

if(randommNumber1===5){
    document.querySelector(".img1").setAttribute("src","dice5.png")
}

if(randommNumber1===6){
    document.querySelector(".img1").setAttribute("src","dice6.png")
}





if(randommNumber2===1){
    document.querySelector(".img2").setAttribute("src","dice1.png")
}

if(randommNumber2===2){
    document.querySelector(".img2").setAttribute("src","dice2.png")

}
if(randommNumber2===3){
    document.querySelector(".img2").setAttribute("src","dice3.png")
}

if(randommNumber2===4){
    document.querySelector(".img2").setAttribute("src","dice4.png")
}

if(randommNumber2===5){
    document.querySelector(".img2").setAttribute("src","dice5.png")
}

if(randommNumber2===6){
    document.querySelector(".img2").setAttribute("src","dice6.png")
}

if(randommNumber1>randommNumber2){
    document.querySelector("h1").innerHTML="Player 1 Win!"
}

else if(randommNumber1<randommNumber2){
    document.querySelector("h1").innerHTML="Player 2 Win!"
}

else if(randommNumber1===randommNumber2){
    document.querySelector("h1").innerHTML="Draw!"
}