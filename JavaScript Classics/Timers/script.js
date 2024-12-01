let startTime = 0; 
let elapsedTime = 0; 
let intervalId; 
let isRunning = false; 


function formatTime(ms) {
	const totalSeconds = Math.floor(ms / 1000);
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	return `${hours.toString().padStart(2, "0")}:${minutes
		.toString()
		.padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}


function startTimer() {
	if (isRunning) return; 
	isRunning = true;
	startTime = Date.now() - elapsedTime; 
	intervalId = setInterval(() => {
		elapsedTime = Date.now() - startTime;
		document.getElementById("timer").textContent = formatTime(elapsedTime);
	}, 1000); 
}


function stopTimer() {
	clearInterval(intervalId); 
	isRunning = false; 
}


function resetTimer() {
	clearInterval(intervalId); 
	isRunning = false; 
	elapsedTime = 0; 
	document.getElementById("timer").textContent = "00:00:00"; 
}


document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
