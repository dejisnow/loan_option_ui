window.onload=()=>{
  
  let options= document.querySelectorAll(".option")
  
  
  options.forEach((option)=>{
  
  option.addEventListener("click",()=>{
  options.forEach((element)=>{
     element.classList.remove("active")
  })
      option.classList.add("active")
  })
  
      
  } )
  
  
   
  
  

        
 
    
}
