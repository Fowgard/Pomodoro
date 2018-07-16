let timeSet = 25
let time = (timeSet*60)+1
let breakTime = 5
let id = 0
let running = false
let working = true

refresh();

function refresh(){
	time--;
  let min = ~~(time/60);
	let sec = time%60;
	document.getElementById("Display").innerHTML = min + ":" + sec
  
  if(time == 0 && !working){
  	time = 25 * 60 + 1
    working = true;
    document.getElementById("Status").innerHTML = "WORK, WORK";
    document.getElementById("Status").style.color = "red";
    document.getElementById("Display").style.color = "red";
    document.getElementById("Container").style.color = "red";
  }
  
  if (time == 0 && working){
  	time = breakTime *60 + 1;
    working = false;
    document.getElementById("Status").innerHTML = "Break";
    document.getElementById("Status").style.color = "#0dba1e";
    document.getElementById("Display").style.color = "#0dba1e";
    document.getElementById("Container").style.color = "#0dba1e";
  }
  
  return
  
  
}

function runTimer(){
  if(running == false){
	id = setInterval(refresh, 1000);
  }
  running = true
}

function pauseTimer(){
	running = false;
  clearInterval(id);
}

function resetTimer(){
	running = false;
  clearInterval(id);
  time = (timeSet*60)+1;
  refresh();
}

function selectTime(){
	timeSet = prompt("Set Time:");
  resetTimer();
}


    let runbtn = document.querySelector("#Run");
    runbtn.addEventListener("click", () => {
      runTimer();
    });

let pausebtn = document.querySelector("#Pause");
pausebtn.addEventListener("click", () => {
  pauseTimer();
});

let resetbtn = document.querySelector("#Reset");
resetbtn.addEventListener("click", () => {
  resetTimer();
});

let selectbtn = document.querySelector("#Select");
selectbtn.addEventListener("click", () => {
  selectTime();
});