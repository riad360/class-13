
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let d = new Date();

let month = months[d.getMonth()];

if(d.getDate() <= 9){
	document.getElementById("day").innerHTML = '0'+d.getDate();
}else{
	document.getElementById("day").innerHTML = d.getDate();
}

document.getElementById("month").innerHTML = month;
document.getElementById("year").innerHTML = d.getFullYear();

const h = document.getElementById("h");
const m = document.getElementById("m");
const s = document.getElementById("s");
const am = document.getElementById("am");
setInterval(() => {
	let date = new Date();
	let hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	if (h > 12) {
     	am.innerHTML = "PM";
	}else{
	     am.innerHTML = "AM";
	}
	h.innerHTML = `${hour < 10 ? "0" + hour : hour }:`;
	m.innerHTML = `${min < 10 ? "0" + min : min }`;
	s.innerHTML = `${sec < 10 ? "0" + sec : sec }`;
}, 1000);

