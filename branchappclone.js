window.onload=()=>{
  
  let option= document.querySelectorAll(".option")
  
  
  for(let i = 0; i < option.length; i++){
   option[i].addEventListener("click",()=>{
    
    if(option[i].classList.contains("active")){
        option[i].style.scale= 1
    }
    option[i].classList.toggle("active")
 
   })
  }
   
  
  

        
 
    
}
