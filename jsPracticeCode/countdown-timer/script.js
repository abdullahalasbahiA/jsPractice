const newYears = new Date("Jan 1, 2022").getTime();

const d = document.getElementById("days");
const h = document.getElementById("hours");
const m = document.getElementById("mins");
const s = document.getElementById("seconds");


function countdown(){
	const nd = new Date();
	const newYearsDate = new Date(newYears);
	const currentDate = new Date().getTime();
	
	const totalSeconds = (newYears - currentDate)/1000;
	
	const days = Math.floor(totalSeconds/3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const minutes = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;
	

	d.innerHTML = days;
	h.innerHTML = hours;
	m.innerHTML = minutes;
	s.innerHTML = seconds;
	

}

countdown;
setInterval(countdown, 1000);