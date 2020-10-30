function getanswer() {
    let question = document.querySelector("#question").value;
    if(question == "aim"){
        document.querySelector("#answer").value = "Our aim is to provided places around sub-Saharan Africa where it's the place with most lacking in education around the world.";
      }else if(question == "information"){
        document.querySelector("#answer").value = "You can go to https://www.un.org/sustainabledevelopment/ to find more information";
      }else if(question == "donate"){
        document.querySelector("#answer").value = "After we receive a fair amount of donation, we buy books that are more needed. Confirmation of your donation being used will be sent through your email to keep you a track of how we are using your thankful donation.";
      }else{
        document.querySelector("#answer").value = " not a keyworld";
      }
  
  }

var i = 0;
function read(){
    if(!i){
        document.getElementById("more").style.display = "inline";
        document.getElementById("dots").style.display = "none";
        document.getElementById("read").innerHTML = "Read less";
        i = 1;
    }else{
        document.getElementById("more").style.display = "none";
        document.getElementById("dots").style.display = "inline";
        document.getElementById("read").innerHTML = "Read more";
        i = 0;
    }
  }