!function(){var e=document.querySelector(".cursor"),t=document.querySelector(".cursor2"),n=document.querySelectorAll("a");document.addEventListener("mousemove",(function(t){t.clientX,t.clientY;e.style.transform="translate3d(calc(".concat(t.clientX,"px - 50%), calc(").concat(t.clientY,"px - 50%), 0)")})),document.addEventListener("mousemove",(function(e){var n=e.clientX,o=e.clientY;t.style.left=n+"px",t.style.top=o+"px"})),document.addEventListener("mousedown",(function(){e.classList.add("click"),t.classList.add("cursorinnerhover")})),document.addEventListener("mouseup",(function(){e.classList.remove("click"),t.classList.remove("cursorinnerhover")})),n.forEach((function(t){t.addEventListener("mouseover",(function(){e.classList.add("hover")})),t.addEventListener("mouseleave",(function(){e.classList.remove("hover")}))})),window.onscroll=function(){var e,t,n;e=document.body.scrollTop||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight,n=e/t*100,document.getElementById("myBar").style.width=n+"%"},$(document).ready((function(){$("a").on("click",(function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},700,(function(){window.location.hash=t}))}}))}))}();
//# sourceMappingURL=restaurant.885eeafa.js.map
