const main = document.querySelector("main");
const voiceSelect = document.getElementById("voice");
const textarea = document.getElementById("text");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");

  $(".box1").on("click", () => {
   var text=$(".box1").text();
    setTextMessage( text  );
    speakText();
    $(".box1").addClass("active");
    $(".tdiv").addClass("tdivshow");
    setTimeout(function(){$(".tdiv").removeClass("tdivshow");},8000);
    setTimeout(function(){$(".box1").removeClass("active");},600);

  });

  $(".box2").on("click", () => {
   var text=$(".box2").text();
    setTextMessage( text  );
    speakText();
    $(".box2").addClass("active");
    $(".qdiv").addClass("tdivshow");
    setTimeout(function(){$(".qdiv").removeClass("tdivshow");},6500);
    setTimeout(function(){$(".box2").removeClass("active");},600);
  });

  $(".box3").on("click", () => {
   var text=$(".box3").text();
    setTextMessage( text  );
    speakText();
    $(".box3").addClass("active");
    $(".ldiv").addClass("tdivshow");
    setTimeout(function(){$(".ldiv").removeClass("tdivshow");},7700);
    setTimeout(function(){$(".box3").removeClass("active");},600);
  });

  $(".box4").on("click", () => {
   var text=$(".box4").text();
    setTextMessage( text  );
    speakText();
    $(".box4").addClass("active");
    $(".tdiv").addClass("tdivshow");
    setTimeout(function(){$(".tdiv").removeClass("tdivshow");},7000);
    setTimeout(function(){$(".box4").removeClass("active");},600);
  });

  $(".box5").on("click", () => {
   var text=$(".box5").text();
    setTextMessage( text  );
    speakText();
    $(".box5").addClass("active");
    $(".qdiv").addClass("tdivshow");
    setTimeout(function(){$(".qdiv").removeClass("tdivshow");},6500);
    setTimeout(function(){$(".box5").removeClass("active");},600);
  });

  $(".box6").on("click", () => {
   var text=$(".box6").text();
    setTextMessage( text  );
    speakText();
    $(".box6").addClass("active");
    $(".ldiv").addClass("tdivshow");
    setTimeout(function(){$(".ldiv").removeClass("tdivshow");},5500);
    setTimeout(function(){$(".box6").removeClass("active");},600);
  });

  $(".box7").on("click", () => {

   var text=$(".box7").text();
    setTextMessage( text  );
    speakText();
    $(".box7").addClass("active");
    $(".bdiv").addClass("tdivshow");
    setTimeout(function(){$(".bdiv").removeClass("tdivshow");},8000);
    setTimeout(function(){$(".box7").removeClass("active");},600);
  });
  $(".box8").on("click", () => {
   var text=$(".box8").text();
    setTextMessage( text  );
    speakText();
    $(".box8").addClass("active");
    $(".qdiv").addClass("tdivshow");
    setTimeout(function(){$(".qdiv").removeClass("tdivshow");},6000);
    setTimeout(function(){$(".box8").removeClass("active");},600);
  });
  $(".box9").on("click", () => {
   var text=$(".box9").text();
    setTextMessage( text  );
    speakText();
    $(".box9").addClass("active");
    $(".ldiv").addClass("tdivshow");
    setTimeout(function(){$(".ldiv").removeClass("tdivshow");},4500);
    setTimeout(function(){$(".box9").removeClass("active");},600);
  });

//init speech synth
const message = new SpeechSynthesisUtterance();

//set text
function setTextMessage(text) {
  message.text = text;
}

//speak text
function speakText() {
  speechSynthesis.speak(message);
}

//store voice
let voices = [];
function getVoice() {
  voices = speechSynthesis.getVoices();
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;
    voiceSelect.appendChild(option);
  });
}
//voice change
speechSynthesis.addEventListener("voiceschanged", getVoice);
getVoice();


//toggle text box
toggleBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.toggle("show")
);
//close btn
//toggle text box
closeBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.remove("show")
);
//set voice
function setVoice(e) {
    message.voice = voices.find((voice) => voice.name === e.target.value);
  }
//change voice
voiceSelect.addEventListener("change", setVoice);
//read text btn
readBtn.addEventListener("click", () => {
  setTextMessage(textarea.value);
  speakText();
});
