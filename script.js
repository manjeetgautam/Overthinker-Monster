
let option1 = document.getElementById("item1")
let option2 = document.getElementById("item2")
let btn = document.getElementById("start-btn")
let timecount = document.getElementById("timecount")
let bgvideo = document.getElementById("bg-video")
let hurryup = document.getElementById("hurryup")
let kitty = document.getElementById("cat")
let ghost = document.getElementById("ghost")
let tutorial = document.getElementById("tutorial")
let runningkitty = document.getElementById("running-cat")
let runningghost = document.getElementById("running-ghost")
let winmassage = document.getElementById("winmessage")
let timefor = document.getElementById("timefor")
let itemmassage = document.getElementById("itemmassage")
let ghostmassage = document.getElementById("ghostwinmassage")
let replay = document.getElementById("replay")


// Hide all the charactor and text

function hideall(){
    hurryup.style.display="none"
    kitty.style.display="none"
    ghost.style.display="none"
    tutorial.style.display="none"
    runningkitty.style.display="none"
    runningghost.style.display="none"
    winmassage.style.display="none"
    timefor.style.display="none"
    itemmassage.style.display="none"
    ghostmassage.style.display="none"
    replay.style.display="none"
    option1.value=""
    option2.value=""  
    btn.style.display="none"
}

// this is the starting game function 

function game(){
    hideall()
    replay.style.display="none"
    kitty.style.display="block"
    ghost.style.display="block"
    tutorial.style.display="block"
    btn.style.display="block"
    option1.value=""
    option2.value=""
    option1.type = "text"
    option2.type = "text"
    timecount.textContent="00";


}

//Call the starting game func
game()


// when player win youwin func call;
function youwin(tt,massage){

    clearInterval(tt)
        bgvideo.pause();
        // hide elements
        hurryup.style.display="none"
        runningkitty.style.display="none"
        runningghost.style.display="none"
        // display elements

        itemmassage.textContent="'"+massage+"'"

        if(option1.type=="button"){
            itemmassage.style.display="block"
            kitty.style.display="block"
            winmassage.style.display="block"
            timefor.style.display="block"
            replay.style.display="block"

        }

        replay.addEventListener("click", function(){
            game()
        })
}


//press the start btn to start the game
btn.addEventListener("click",()=>{
    bgvideo.currentTime = 0;
    bgvideo.play();

    kitty.style.display="none"
    ghost.style.display="none"
    tutorial.style.display="none"
    btn.style.display="none"
    replay.style.display="none"


    //display element during the game
    hurryup.style.display="block"
    runningkitty.style.display="block"
    runningghost.style.display="block"

    option1.type = "button"
    option2.type = "button"

    let count =0;
    let txt1= option1.value
    let txt2= option2.value

    let tt = setInterval(()=>{

        count = count +1;
    timecount.textContent=count;
    if(count ==10){
        clearInterval(tt)
        bgvideo.pause();
        ghost.style.display="block"
        runningghost.style.display="none"
        runningkitty.style.display="none"
        hurryup.style.display="none"
        ghostmassage.style.display="block"
        replay.style.display="block"

        replay.addEventListener("click", ()=>{
            replay.style.display="none"
            game()
        })

    }

    // when player click on options

    option1.addEventListener("click",()=>{
           youwin(tt,txt1)

    })

    option2.addEventListener("click",()=>{
        youwin(tt,txt2)

    })

    },1000)

})