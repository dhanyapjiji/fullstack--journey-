var userInput = document.getElementsByTagName("LI");
for (var i = 0; i < userInput.length; i++) {
    var span = document.createElement("SPAN");
    var tex = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(tex);
    userInput[i].appendChild(span);
    
    // പഴയ ഐറ്റങ്ങൾക്കും ഡിലീറ്റ് ഫംഗ്ഷൻ നൽകണം
    span.onclick = function() {
        this.parentElement.remove();
    }
}
//to add element and add a cross as span and close function is given
function addElement(){
    var inputText=document.getElementById("t1").value.trim();
    if(inputText===""){
        alert("Please enter elements");
        return;
    }
    var li =document.createElement("li");
    var t=document.createTextNode(inputText);
    li.appendChild(t);
    var span= document.createElement("SPAN");
      var tex=document.createTextNode("\u00D7");
      span.className="close";
      span.appendChild(tex);
      li.appendChild(span);
       
      span.onclick = function() {
        this.parentElement.remove();
    }
    document.getElementById("un-list").appendChild(li);
       document.getElementById('t1').value="";
}
//to check wheter it is checked or not
const list=document.querySelector("UL");
list.addEventListener("click",function(ev){
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
 
},false);
function clearAll(){
  
  list.innerHTML="";
  document.getElementById('t1').value = "";
}//to display saved items while open
window.onload = function() {
  const savedData = localStorage.getItem("myTodoList");
  if (savedData) {
      const items = JSON.parse(savedData);//make it an array
      items.forEach(item => {
          createListElement(item.text, item.checked);
      });
  }
};
function saveAll(){
  const items = [];
  const allLi = document.querySelectorAll("#un-list li");

  allLi.forEach(li => {
      // '×' ഒഴിവാക്കി ടാസ്ക് ടെക്സ്റ്റ് മാത്രം എടുക്കുന്നു
      const taskText = li.firstChild.textContent;
      const isChecked = li.classList.contains('checked');
      items.push({ text: taskText, checked: isChecked });
  });

  localStorage.setItem("myTodoList", JSON.stringify(items));
  alert("Sussesfully saved!");
}
function createListElement(text, isChecked) {
  var li = document.createElement("li");
  var t = document.createTextNode(text);
  li.appendChild(t);
  
  if (isChecked) {
      li.classList.add('checked');
  }

  var span = document.createElement("SPAN");
  var tex = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(tex);
  li.appendChild(span);
  span.onclick = function() {
     this.parentElement.remove();

  }
  document.getElementById("un-list").appendChild(li);
}


