
let btn=document.querySelector(".button-75");


btn.addEventListener("click",function(){

    let title=document.getElementById("title").value;
    let content=document.getElementById("content").value;
    if(title===""){
        alert("enter some text");
        return;
    }else{

        
   
    let color=document.getElementById("color");
    let card=document.createElement("div");
  
    card.classList.add("card");
    let head=document.createElement("h1");
    head.innerText=title;
    let para=document.createElement("p");
    para.innerText=content;
    card.innerHTML = `
     
    <button class="btn2">X</button>
    `;
    card.append(head);
    card.append(para);
    card.style.backgroundColor=color.value;
    document.querySelector(".lower_section").append(card);
     let ans=document.getElementById("title");
     ans.value="";   
     let ans2=document.getElementById("content");
     ans2.value=""; 
     document.querySelector("#note").style.display = "none";
    }


    let close=document.querySelector(".lower_section");
    
    close.addEventListener("click",(e)=>{
        if(e.target.innerText==="X"){
            e.target.parentElement.remove();
        }
        
    })

   

});
