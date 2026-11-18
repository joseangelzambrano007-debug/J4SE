// scalloped badge path
(function(){var n=14,R=92,a=7,d="";for(var i=0;i<=360;i+=2){var t=i*Math.PI/180,r=R+a*Math.sin(n*t);d+=(i?"L":"M")+(r*Math.cos(t)).toFixed(1)+" "+(r*Math.sin(t)).toFixed(1)}document.getElementById("sc").setAttribute("d",d+"Z")})();
// menu
var b=document.querySelector(".burger"),m=document.getElementById("menu");
b.addEventListener("click",function(){var o=m.classList.toggle("open");b.setAttribute("aria-expanded",o)});
m.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){m.classList.remove("open");b.setAttribute("aria-expanded","false")})});
// preselect product from card links
document.querySelectorAll("[data-p]").forEach(function(a){a.addEventListener("click",function(){document.getElementById("prod").value=a.dataset.p})});
// form -> WhatsApp
document.getElementById("f").addEventListener("submit",function(e){
  e.preventDefault();var f=e.target,ok=document.getElementById("ok");
  if(!f.n.value.trim()){ok.style.display="block";f.n.focus();return}
  ok.style.display="none";
  var t="Hola La Casa Dulce, soy "+f.n.value.trim()+". Quiero: "+f.p.value+(f.d.value?" ("+f.d.value+")":"")+".";
  window.open("https://wa.me/573027124509?text="+encodeURIComponent(t),"_blank","noopener");
});
