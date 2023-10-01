const questions = [
    {
        "ques": "1.In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
        "options":["1850s","1880s","1930s", "1950s"],
        "answer": "second"
    },
    {
        "ques": "2.'.MOV' extension refers usually to what kind of file?",
        "options":["Image file","Animation/movie file","Audio file", "MS Office document"],
        "answer": "second"
    },
    {
        "ques" : "3. What is (void*)0?",
        "options": ["Representation of NULL pointer", "Representation of void pointer", "Error", "None of above"],
        "answer" : "first"
    },
    {
        "ques" : "4. How many bytes are occupied by near, far and huge pointers (DOS)?",
        "options": ["near=2 far=4 huge=4", "near=4 far=8 huge=8", "near=2 far=4 huge=8", "near=4 far=4 huge=8"],
        "answer" : "first"
    },
    {
        "ques" : "5. If a variable is a pointer to a structure, then which of the following operator is used to access data members of the structure through the pointer variable?",
        "options": [".", "&", "*", "->"],
        "answer" : "fourth"
    }, 
    {
        "ques" : "6. The SQL command to create a table is:",
        "options": ["MAKE TABLE", "ALTER TABLE.", "DEFINE TABLE", "CREATE TABLE"],
        "answer": "fourth"
    },
    {
        "ques" : "7. The SQL statement to create a view is:",
        "options": ["CREATE VIEW.", "CREATE VIEW.", "SELECT VIEW.", "INSERT VIEW."],
        "answer": "first"
    },
    {
        "ques" : "8. You want to implement a mechanism that automates the IP configuration, including IP address, subnet mask, default gateway, and DNS information. Which protocol will you use to accomplish this?",
        "options": ["STMP", "SNMP","DHCP", "ARP"],
        "answer": "third"
    },
    {
        "ques" : "9. To avoid the race condition, the number of processes that may be simultaneously inside their critical section is",
        "options": ["8", "1", "16", "0"],
        "answer": "second"
    },
    {
        "ques" : "10. Process is",
        "options": ["program in High level language kept on disk", "contents of main memory", "a program in execution", "a job in secondary memory"],
        "answer": "third"
    }
];

// const name = require("./name");
// console.log(name);
//setting question at zero
let currQues = 0;
let currScore = 0;


//updating users name
//initially updating questions from our storage
//initially updating options from our storage
const displayQ = document.querySelector(`.question`);
const displayOptions = document.querySelectorAll(`.opp`);
const radio = document.querySelectorAll(`.op`);
function setq() {
    //setting question
    displayQ.innerHTML = questions[currQues].ques;
    
    //setting option
    for(let i=0; i<displayOptions.length; i++) {
        displayOptions[i].innerHTML = questions[currQues].options[i];
    }
    //currQues++;
}
if(currQues == 0) {
    setq();
}

if(currQues == 5) {
    console.log("five");
}

//After saving the first question to display further quesrion

    

const save = document.querySelector(`.save`);
const finish = document.querySelector(`.finish`);
    save.addEventListener("click", () => {

        //displaying new question
        displayQ.innerHTML = questions[currQues].ques;
        //displaying options related to that question
        for(let i=0; i<displayOptions.length; i++) {
            displayOptions[i].innerHTML = questions[currQues].options[i];
        }
    //checking answer
        for(let i=0; i<radio.length; i++) {
            if(radio[i].checked) {
                console.log(radio[i].value );
                console.log(questions[currQues].answer);
                if(radio[i].value == questions[currQues].answer) {
                    currScore++;
                    console.log("ans correct")
                }
            }
        }
    
        currQues++;
        updateScore();
        console.log(currQues);
        if(currQues == 10) {
            // console.log("five");
            // save.innerHTML = "submit";
            // save.classList.add("submit");
            // save.classList.remove("save");
            // console.log(save);
            // let submit = document.createElement("button");
            // submit.classList.add("submit");
            // submit.innerHTML = "submit"
            // console.log(document.querySelector(`.submit`));
            // submit.addEventListener("click", () => {
            //     console.log("maon");
            // })
            save.classList.add("zeroOpacity");
            console.log(save);
            finish.classList.remove(`zeroOpacity`);
        }
        setq();
    });


console.log(typeof(currQues))


//function to update  score

const score = document.querySelector(`#score`)
console.log(score);

function updateScore() {
    score.innerHTML = `Score : ${currScore}/10`;
}



//finish button


const container = document.querySelector(".container");
finish.addEventListener("click", ()=> {
    console.log("finish clicked")
    container.remove();
    showResult();
});

function showResult() {
    let div = document.createElement(`div`);
    div.classList.add(`result`);
    console.log(div);
    let h1 = document.createElement(`h1`);
    h1.innerHTML = `Total  Score :  ${currScore} `;
    console.log(h1.innerText);
    h1.classList.add(`dispScore`);
    let h2 = document.createElement(`h2`);
    h2.innerHTML = `Thank You!`;
    h2.classList.add(`thanks`);
    div.appendChild(h1);
    div.appendChild(h2);
    let body = document.querySelector(`body`);
    body.appendChild(div);
}

//timer
$( document ).ready(function() {

    $( window ).load(function() { 
	
/*
	Thanks for taking a look at the new film countdown demo
	
  A lot more demos, tricks and tips are in the works
	I've finally set up a Twitter account for all these things 
  so if you like this demo please follow me: @Craig_PointC
	
	If you use this countdown on anything, please send me a link. 
  I'd love to see it.
	
	Have fun.
	
*/	

var demo = document.getElementById("projectionScreen"),
	  countDown = document.getElementById("counter"),
    masterTimeline = new TimelineMax({delay:0.1}),	  
	  count = 10; // starting number for the countdown

TweenMax.set(demo, {transformOrigin:"center", autoAlpha:1, xPercent:-50, yPercent:-50});
TweenMax.set("#rightLeg", {transformOrigin:"0% 0%", rotation:30, x:5});
TweenMax.set("#leftLeg", {transformOrigin:"100% 0%", rotation:-30, x:-5});
TweenMax.set("#screenBars, #shadow", {transformOrigin:"50% 50%"});
TweenMax.set("#rotator, #supports", {transformOrigin:"50% 100%"});
TweenMax.set("#shadow", {scaleX:0, autoAlpha:0});
TweenMax.set("#screen", {transformOrigin:"50% 0%", scaleY:0});
TweenMax.set("#centerShadowBottom, #movieClip",{autoAlpha:0, transformOrigin:"center"});




// start the countdown with the count variable value
countDown.textContent = count;
      
     

// create the projection screen animation
function projector() {
var tl = new TimelineMax();
tl.from("#supports", 0.6, {scaleY:0, ease:Expo.easeInOut})
  .add("legExtension")
  .to("#rightLeg", 0.4, {rotation:0, x:0, ease:Power2.easeOut}, "legExtension")
  .to("#leftLeg", 0.4, {rotation:0, x:0, ease:Power2.easeOut},"legExtension")
  .from("#screenBars",0.6,{scaleX:0, ease:Expo.easeOut}, "legExtension")
  .to("#centerShadowBottom",0.3,{autoAlpha:1}, "legExtension")
  .add("screenDown","-=0.25")
  .to("#screen", 0.6, {scaleY:1, ease:Power4.easeOut},"screenDown")
  .from("#screenBottom, #centerShadowBottom", 0.6, {y:-569, ease:Power4.easeOut},"screenDown")
  .to("#shadow", 0.6, {scaleX:1, autoAlpha:.2, ease:Power4.easeOut},"screenDown")
  .to("#film", 1.5, {autoAlpha:1});	
return tl;
}

// create the countdown animation 
function theCount() {
var tl = new TimelineMax({repeat:count-1, onRepeat:changeIt});
tl.to("#rotator", 1, {rotation:360, ease:Linear.easeNone})
  .fromTo( ".big", 1 , {drawSVG:'0 0%'}, {drawSVG:'0% 100%', ease:Linear.easeNone},0 );
return tl;
}

// fade out the countdown and show GreenSock info 
function movie() {
var tl = new TimelineMax();
tl.to("#film", 0.2, {autoAlpha:0})
  .set("#movieClip", {autoAlpha:1})
  .add("textEnter")
  .from("#line1", 1, {x:-700, ease:Back.easeOut}, "textEnter")
  .from("#line2", 1, {x:700, ease:Back.easeOut}, "textEnter")
  .from("#sock", 0.75, {y:260, ease:Power3.easeOut}, "textEnter+=0.5");
return tl;
}

// change the countdown on each repeat of the film leader animation
function changeIt() {
	count--;
	countDown.textContent = count;	
}
      
    

/* ---------------------------------------------------------------
	 Correctly size/resize and position the SVG 
	---------------------------------------------------------------*/

function sizeAll() {
	var h = window.innerHeight,
		  w = window.innerWidth;
		
	if ( w > h) {
		TweenMax.set(demo, {height:h, width:h});
		} 
		
	else {
		TweenMax.set(demo, {height:w, width:w});
	
		}
}

$(window).resize(sizeAll);

sizeAll();

// master timeline with all sections

masterTimeline
	.add( projector() )
	.add( theCount(),"-=1.5" )
	.add( movie() );

	// end window load
	}); 

// end doc ready
}); 