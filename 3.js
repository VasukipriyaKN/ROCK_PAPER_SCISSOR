function rpsGame(yourChoice) {
    document.getElementById("image").remove();
    var div = document.createElement("div");
    div.setAttribute("class","image");
    div.setAttribute("id","image");

    var choice = document.createElement("img");
    choice.setAttribute("src",yourChoice);
    choice.setAttribute("id","choiceImg");

    document.getElementById("main").appendChild(div);
    document.getElementById("image").appendChild(choice);
    
    var images = [  
                    `file:///G:/Vasuki/codes1/JavaScript/3/rock.jpg`,
                    `file:///G:/Vasuki/codes1/JavaScript/3/paper.jpg`, 
                    `file:///G:/Vasuki/codes1/JavaScript/3/scissor.jpg`
                 ]

  

    var imgOpponent = document.createElement("img");
    
    var a = images[randomImage()];

    imgOpponent.setAttribute("src",a);
    imgOpponent.setAttribute("id","opponentImg");


    function randomImage() {
            var num = Math.floor(Math.random()*3);
            return num;
    }
    
    document.getElementById("image").appendChild(imgOpponent);
    
    
    
    var resultText = document.createElement("div");
    resultText.setAttribute("class","resultText");
    resultText.setAttribute("id","resultText");
    document.getElementById("main").appendChild(resultText);

    var h1 = document.createElement("h1");
    h1.setAttribute("id","h1")
    document.getElementById("resultText").appendChild(h1);
    

    document.getElementById("main").style.backgroundColor="black";
    document.getElementById("main").style.boxShadow="black";


    function winner(yourChoice,a) {
        if (yourChoice == a) {
            var tie = document.createTextNode("OOPS TIED")
            h1.appendChild(tie);
        }
        else if (yourChoice != a){
            if (yourChoice == `file:///G:/Vasuki/codes1/JavaScript/3/paper.jpg` && a == images[0]) {
                var tie = document.createTextNode("WINNER")
                h1.appendChild(tie);
            }
            
            else if (yourChoice == `file:///G:/Vasuki/codes1/JavaScript/3/paper.jpg` && a == images[2]) {
                var tie = document.createTextNode("LOSER")
                h1.appendChild(tie);
            }
            else if (yourChoice == `file:///G:/Vasuki/codes1/JavaScript/3/rock.jpg` && a == images[1]) {
                var tie = document.createTextNode("LOSER")
                h1.appendChild(tie);
            }
            else if (yourChoice == `file:///G:/Vasuki/codes1/JavaScript/3/rock.jpg` && a == images[2]) {
                var tie = document.createTextNode("WINNER");
                h1.appendChild(tie);
            }
            else if (yourChoice == `file:///G:/Vasuki/codes1/JavaScript/3/scissor.jpg` && a == images[0]) {
                var tie = document.createTextNode("LOSER");
                h1.appendChild(tie);
            }
            else if (yourChoice == `file:///G:/Vasuki/codes1/JavaScript/3/scissor.jpg` && a == images[1]) {
                var tie = document.createTextNode("WINNER");
                h1.appendChild(tie);
            }
        }
    }

    winner(yourChoice,a);

    setTimeout("document.location.reload()",2500);
}
