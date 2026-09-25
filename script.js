let boxes = document.querySelectorAll(".first");
let heading=document.querySelector("h1");
let reset=document.querySelector("h2");
let winnerVideo = document.querySelector("#winnerVideo");
let game_box = document.querySelector(".game_box");
let winnerAudio = document.querySelector("#winnerAudio");
let clickSound = new Audio("click.mp3");
clickSound.preload = "auto";
let H = new Audio("haaa.mp3");


let box1=document.querySelector("#first");
let box2=document.querySelector("#second");
let box3=document.querySelector("#third");
let box4=document.querySelector("#fourth");
let box5=document.querySelector("#fifth");
let box6=document.querySelector("#sixth");
let box7=document.querySelector("#seventh");
let box8=document.querySelector("#eighth");
let box9=document.querySelector("#ninth");
 let val="o";

 function showWinnerVideo() {
    setTimeout(function() {
        game_box.style.display = "none";
        winnerVideo.style.display = "block";
         winnerVideo.loop = true;
        winnerVideo.play();
         winnerAudio.loop = true;
        winnerAudio.play();
        H.pause();
    }, 6000);
}

boxes.forEach(function(boxy) {
    let pa = boxy.querySelector("p");

    boxy.addEventListener("click", function() {
       
        if (val === "o") {
             
            pa.innerText = "x";
             boxy.style.pointerEvents = "none";
            pa.style.fontSize = "15vw";
            pa.style.paddingBottom = "40px";
            val="x"
            clickSound.currentTime = 0;
            clickSound.play();
            
           
            // X winner
if (
    box1.innerText === "x" && box4.innerText === "x" && box7.innerText === "x"
) {
    heading.innerText = "The winner is X";
    box1.style.backgroundColor = "green";
    box4.style.backgroundColor = "green";
    box7.style.backgroundColor = "green";
     H.currentTime = 0;
            H.play();

     showWinnerVideo();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box7.innerText === "x" && box8.innerText === "x" && box9.innerText === "x"
) {
    heading.innerText = "The winner is X";
    box7.style.backgroundColor = "green";
    box8.style.backgroundColor = "green";
    box9.style.backgroundColor = "green";
    H.currentTime = 0;
            H.play();
     showWinnerVideo();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
               
}
else if (
    box9.innerText === "x" && box6.innerText === "x" && box3.innerText === "x"
) {
    heading.innerText = "The winner is X";
    box9.style.backgroundColor = "green";
    box6.style.backgroundColor = "green";
    box3.style.backgroundColor = "green";
    H.currentTime = 0;
            H.play();
     showWinnerVideo();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box1.innerText === "x" && box2.innerText === "x" && box3.innerText === "x"
) {
    heading.innerText = "The winner is X";
    box1.style.backgroundColor = "green";
    box2.style.backgroundColor = "green";
    box3.style.backgroundColor = "green";
    H.currentTime = 0;
            H.play();
     showWinnerVideo();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box7.innerText === "x" && box4.innerText === "x" && box1.innerText === "x"
) {
    heading.innerText = "The winner is X";
    box7.style.backgroundColor = "green";
    box4.style.backgroundColor = "green";
    box1.style.backgroundColor = "green";
    H.currentTime = 0;
            H.play();
     showWinnerVideo();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box9.innerText === "x" && box8.innerText === "x" && box7.innerText === "x"
) {
    heading.innerText = "The winner is X";
    box9.style.backgroundColor = "green";
    box8.style.backgroundColor = "green";
    box7.style.backgroundColor = "green";
    H.currentTime = 0;
            H.play();
     showWinnerVideo();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box3.innerText === "x" && box6.innerText === "x" && box9.innerText === "x"
) {
    heading.innerText = "The winner is X";
    box3.style.backgroundColor = "green";
    box6.style.backgroundColor = "green";
    box9.style.backgroundColor = "green";
    H.currentTime = 0;
            H.play();
     showWinnerVideo();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box3.innerText === "x" && box2.innerText === "x" && box1.innerText === "x"
) {
    heading.innerText = "The winner is X";
    box3.style.backgroundColor = "green";
    box2.style.backgroundColor = "green";
    box1.style.backgroundColor = "green";
    H.currentTime = 0;
            H.play();
     showWinnerVideo();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box1.innerText === "x" && box5.innerText === "x" && box9.innerText === "x"
) {
    heading.innerText = "The winner is X";
    box1.style.backgroundColor = "green";
    box5.style.backgroundColor = "green";
    box9.style.backgroundColor = "green";
    H.currentTime = 0;
            H.play();
     showWinnerVideo();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box9.innerText === "x" && box5.innerText === "x" && box1.innerText === "x"
) {
    heading.innerText = "The winner is X";
    box9.style.backgroundColor = "green";
    box5.style.backgroundColor = "green";
    box1.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box2.innerText === "x" && box5.innerText === "x" && box8.innerText === "x"
) {
    heading.innerText = "The winner is X";
    box2.style.backgroundColor = "green";
    box5.style.backgroundColor = "green";
    box8.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box3.innerText === "x" && box5.innerText === "x" && box7.innerText === "x"
) {
    heading.innerText = "The winner is X";
    box3.style.backgroundColor = "green";
    box5.style.backgroundColor = "green";
    box7.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box7.innerText === "x" && box5.innerText === "x" && box3.innerText === "x"
) {
    heading.innerText = "The winner is X";
    box7.style.backgroundColor = "green";
    box5.style.backgroundColor = "green";
    box3.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box4.innerText === "x" && box5.innerText === "x" && box6.innerText === "x"
) {
    heading.innerText = "The winner is X";
    box4.style.backgroundColor = "green";
    box5.style.backgroundColor = "green";
    box6.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box6.innerText === "x" && box5.innerText === "x" && box4.innerText === "x"
) {
    heading.innerText = "The winner is X";
    box6.style.backgroundColor = "green";
    box5.style.backgroundColor = "green";
    box4.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}

        }else {
             click.play();
            pa.innerText="o";
            pa.style.fontSize = "15vw";
             pa.style.paddingBottom = "30px";
             
            boxy.style.pointerEvents = "none";
            val="o"
            
           // O winner
if (
    box1.innerText === "o" && box4.innerText === "o" && box7.innerText === "o"
) {
    heading.innerText = "The winner is O";
    box1.style.backgroundColor = "green";
    box4.style.backgroundColor = "green";
    box7.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box7.innerText === "o" && box8.innerText === "o" && box9.innerText === "o"
) {
    heading.innerText = "The winner is O";
    box7.style.backgroundColor = "green";
    box8.style.backgroundColor = "green";
    box9.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box9.innerText === "o" && box6.innerText === "o" && box3.innerText === "o"
) {
    heading.innerText = "The winner is O";
    box9.style.backgroundColor = "green";
    box6.style.backgroundColor = "green";
    box3.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box1.innerText === "o" && box2.innerText === "o" && box3.innerText === "o"
) {
    heading.innerText = "The winner is O";
    box1.style.backgroundColor = "green";
    box2.style.backgroundColor = "green";
    box3.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box7.innerText === "o" && box4.innerText === "o" && box1.innerText === "o"
) {
    heading.innerText = "The winner is O";
    box7.style.backgroundColor = "green";
    box4.style.backgroundColor = "green";
    box1.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box9.innerText === "o" && box8.innerText === "o" && box7.innerText === "o"
) {
    heading.innerText = "The winner is O";
    box9.style.backgroundColor = "green";
    box8.style.backgroundColor = "green";
    box7.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box3.innerText === "o" && box6.innerText === "o" && box9.innerText === "o"
) {
    heading.innerText = "The winner is O";
    box3.style.backgroundColor = "green";
    box6.style.backgroundColor = "green";
    box9.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box3.innerText === "o" && box2.innerText === "o" && box1.innerText === "o"
) {
    heading.innerText = "The winner is O";
    box3.style.backgroundColor = "green";
    box2.style.backgroundColor = "green";
    box1.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box1.innerText === "o" && box5.innerText === "o" && box9.innerText === "o"
) {
    heading.innerText = "The winner is O";
    box1.style.backgroundColor = "green";
    box5.style.backgroundColor = "green";
    box9.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box9.innerText === "o" && box5.innerText === "o" && box1.innerText === "o"
) {
    heading.innerText = "The winner is O";
    box9.style.backgroundColor = "green";
    box5.style.backgroundColor = "green";
    box1.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box3.innerText === "o" && box5.innerText === "o" && box7.innerText === "o"
) {
    heading.innerText = "The winner is O";
    box3.style.backgroundColor = "green";
    box5.style.backgroundColor = "green";
    box7.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box7.innerText === "o" && box5.innerText === "o" && box3.innerText === "o"
) {
    heading.innerText = "The winner is O";
    box7.style.backgroundColor = "green";
    box5.style.backgroundColor = "green";
    box3.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box2.innerText === "o" && box5.innerText === "o" && box8.innerText === "o"
) {
    heading.innerText = "The winner is O";
    box2.style.backgroundColor = "green";
    box5.style.backgroundColor = "green";
    box8.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}

else if (
    box4.innerText === "o" && box5.innerText === "o" && box6.innerText === "o"
) {
    heading.innerText = "The winner is O";
    box4.style.backgroundColor = "green";
    box5.style.backgroundColor = "green";
    box6.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
else if (
    box6.innerText === "o" && box5.innerText === "o" && box4.innerText === "o"
) {
    heading.innerText = "The winner is O";
    box6.style.backgroundColor = "green";
    box5.style.backgroundColor = "green";
    box4.style.backgroundColor = "green";
     showWinnerVideo();
     H.currentTime = 0;
            H.play();
    boxes.forEach(function(box) {
                    box.style.pointerEvents = "none";
                });
}
            
        }
       
    });
});
reset.addEventListener("click", function () {

    heading.innerText = "Tic Tac Toe";

    // Reset turn
    val = "o";

    boxes.forEach(function (boxy) {

        let pa = boxy.querySelector("p");

        // Clear X / O
        pa.innerText = "";

        // Enable box again
        boxy.style.pointerEvents = "auto";

        // Reset background
        boxy.style.backgroundColor = "aqua";

        // Reset text styling
        pa.style.fontSize = "10vw";
        pa.style.paddingBottom = "0px";
    });
    winnerVideo.style.display = "none";
    game_box.style.display = "flex";
    winnerAudio.pause();
    winnerAudio.currentTime = 0;
     

});