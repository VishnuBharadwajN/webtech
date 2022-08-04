let submit = document.getElementById('submit');
let li = document.getElementById('list');
let item = document.getElementsByTagName('li');
array[x] = document.getElementById("submit").value;
function submit() {
    var numbers = /^[0-9]+$/;
    if(submit.value== '')
    {
        alert("Enter The text");   
    }
    else
    {
    let node = document.createElement("li");
    let textnode = document.createTextNode(submit.value);
     node.appendChild(textnode);
    let p= li.appendChild(node);
    let btn = document.createElement("button");   
       btn.innerHTML = " x ";                  
     let b= p.appendChild(btn); 
     b.style.background="red";
     b.style.borderColor="grey";
     b.style.float="right";
     b.style.width="20px";
     btn.addEventListener("click",fd);
        }
}
function reverse() {
    var  num=document.getElementsByTagName('li').length;
          var kids = li.childNodes;  
          for(var i = num; i >= 0; i--) {  
              var c = li.removeChild(kids[i]);   
              li.appendChild(c);    
            }              
  }  
  function fd() { 
    if(item.length>0){
     if(confirm("CONFIRM THAT YOU WANT TO DELETE")) {    
     li.removeChild(li.lastElementChild);
    }      
else{
  alert("Cancelled");
   }
  }
}

