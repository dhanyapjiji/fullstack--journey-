let otpgenerated="";
let countdown;
function generateOtp(){
    let otp="";
    //clearTimeout(otptime);
    clearInterval(countdown);
    for(let i=0;i<6;i++){
        otp+=Math.floor(Math.random()*10);
    }
   otpgenerated=otp;
   let timeleft=15;
   document.getElementById("otp").innerText="Your OTP is:"+otpgenerated;
   //document.getElementById("valid").innerHTML="";
   //document.getElementById("timer").innerHTML="Time Left is:"+timeleft;
   countdown=setInterval(function (){
       timeleft--;
       document.getElementById("timer").innerHTML="Time Left is:"+timeleft;
      if(timeleft<=0)  {
         clearInterval(countdown);
         otpgenerated="";
         document.getElementsById("otp").innerHTML="OTP Expered";
         document.getElementById("timer").innerText="Time Out";
      }               
   },1000);
}
function validateOtp(){
    let number=document.getElementById("text").value;
    if(otpgenerated==""){
      document.getElementById("otp").innerHTML="OTP Expired";
    }
   else if(number!==""&&number===otpgenerated){
    document.getElementById("valid").innerHTML="Valid OTP"
    clearInterval(countdown);
    clearTimeout(otptime);
 }else{
    document.getElementById("valid").innerHTML="Incorrect OTP "
 }
}
