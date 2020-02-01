$("nav ul li").on("click",function(){
	$(this).addClass("active").siblings().removeClass("active");
});


const text = document.querySelector("#showcase h1");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i=0;i<strText.length;i++){
	text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
	const span = document.querySelectorAll("#showcase h1 span")[char];
	span.classList.add("fade");
	char++;
	if(char === splitText.length){
		complete();
		return;
	}
}

function complete(){
	clearInterval(timer);
	timer = null;
}