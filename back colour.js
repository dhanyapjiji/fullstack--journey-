let colors=["red","green","blue","yellow","purple","black","orange","white","brown"];
function backgroundChenger(){
 let randomColor=colors[Math.floor((Math.random()*colors.length))];
document.body.style.backgroundColor=randomColor;
}
