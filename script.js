const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

link.addEventListener("click", function(){

links.forEach(item=>item.classList.remove("active"));

this.classList.add("active");

});

});

const button=document.querySelector("button");

button.addEventListener("click",function(e){

e.preventDefault();

alert("Thank you! Your message has been received.");

});