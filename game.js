let randomno =Math.floor(Math.random()*10)+1;
function gameCheck(){
    let num=Number(document.getElementById("num").value);
    const cracker ="\u{1F389}";    
    if(isNaN(num)||num<1||num>10)
     {
       document.getElementById("result").innerHTML="Input is not Valid";
     }else{
        if(randomno===num){
                            document.getElementById("result").innerHTML=cracker+"Correct you Wone";

        }   else{
                   document.getElementById("result").innerHTML="Wrong Guss.Try again!"}
     }

}
