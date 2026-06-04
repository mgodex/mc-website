// If you don't want the particles, change the following to false:
const doParticles = true;




// Do not mess with the rest of this file unless you know what you're doing :P

function getWidth() { // credit to travis on stack overflow
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}
if (doParticles && $.fn.firefly) {
	if (getWidth() < 400) $.firefly({minPixel: 1,maxPixel: 2,total: 20});
	else $.firefly({minPixel: 1,maxPixel: 3,total: 40});
}

// This is for the click to copy
let t;
$(document).ready(()=>{
	t = $(".ip").html();
})
$(document).on("click",".ip",()=>{
	let copy = document.createElement("textarea");
	copy.style.position = "absolute";
	copy.style.left = "-99999px";
	copy.style.top = "0";
	copy.setAttribute("id", "ta");
	document.body.appendChild(copy);
	copy.textContent = t;
	copy.select();
	document.execCommand("copy");
	$(".ip").html("<span class='extrapad'>IP已成功复制~</span>");
	setTimeout(function(){
		$(".ip").html(t);
		var copy = document.getElementById("ta");
		copy.parentNode.removeChild(copy);
	},800);
});

// Store modal
$(document).on("click",".item.store",(e)=>{
  e.preventDefault();
  $("#storeModal").css({display:"flex", opacity:0}).animate({opacity:1},200);
});

$(document).on("click",".modal-close",(e)=>{
  $("#storeModal").fadeOut(200);
});

$(document).on("click",".modal-overlay",(e)=>{
  if ($(e.target).hasClass("modal-overlay")) {
    $("#storeModal").fadeOut(200);
  }
});

// Animated player count
$(document).ready(()=>{
  let currentCount = Math.floor(Math.random() * 151) + 50;
  $(".sip").html(currentCount);

  setInterval(()=>{
    let change = Math.floor(Math.random() * 9) - 4;
    if (change === 0) change = 1;
    let newCount = currentCount + change;
    newCount = Math.max(50, Math.min(200, newCount));

    $({ count: currentCount }).animate({ count: newCount }, {
      duration: 2000,
      step: function() {
        $(".sip").html(Math.round(this.count));
      },
      complete: ()=>{
        currentCount = newCount;
        $(".sip").html(newCount);
      }
    });
  }, 3500);
});
