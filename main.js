


const toggleButton= document.getElementById('nav-toggle');
      const navLinks= document.getElementById('nav-menu');
// setTimeout(function(){
//     toggleButton.addEventListener('click', () =>{
     
//         navLinks.classList.toggle('active');
//       })
// },-10);
    
     
let x = 0;
function nav(){
   if(x > "-100"){
    x = x + "%";
    navLinks.style.right = x;
    // navLinks.classList.add("active");
    
}
if(x == 0){
   x = x + (-100)+ "%";
   console.log(x);
    navLinks.style.right = x;
    // navLinks.classList.remove("active");
    console.log(x);
   }


}

// console.log(nav());








var typed=new Typed(".text", {
    strings:["HTML_" , "CSS_ " , "Bootstrap_", "JavaScript_"],
    typeSpeed:100,
    backspeed:100,
    backDelay:1000,
    loop:true
});  



