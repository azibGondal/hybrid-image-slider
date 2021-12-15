let left = document.querySelector("i.left");
let right = document.querySelector("i.right");

let container = document.querySelector("#container");
let max_length = container.getElementsByTagName("img").length ;

let click = 1 ;


right.addEventListener("click",()=>{
    if(click <  max_length )
    {
      ChangeR(click);
      click++;

    }
    else{
      ChangeR(click);
      click = 1;
}
    

    

})

left.addEventListener("click", () => {
  
  if(click > 1 )
  {
    click--; 
  }
  else if(click <= 1 ){
    click = max_length;
  }
 
  ChangeL(click); 
 
});

function ChangeR(click)
{   if(click  === max_length)
  {
    let img1 = document.querySelector(`#img${click}`);
    let img2 = document.querySelector(`#img${click - (max_length - 1)}`);
    
    img1.classList.add("hidden");
    img2.classList.remove("hidden");

  }
  else{
    let img1 = document.querySelector(`#img${click}`);
    let img2 = document.querySelector(`#img${click + 1}`);
    
    img1.classList.add('hidden');
    img2.classList.remove("hidden");
  }
  
  
}

function ChangeL(click){
  
  if(click === max_length ){
    let img1 = document.querySelector(`#img${click}`);  
    let img2 = document.querySelector(`#img${click - (max_length - 1)}`); 
  
    img1.classList.remove("hidden"); 
    img2.classList.add("hidden");  

  }
  else{
    let img1 = document.querySelector(`#img${click}`);
    let img2 = document.querySelector(`#img${click + 1}`);

    img1.classList.remove("hidden");
    img2.classList.add("hidden");
  }
 
}





