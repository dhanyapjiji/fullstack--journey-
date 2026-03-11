function updateClock(){

       const today=new Date();
       const day=String(today.getDate()).padStart(2,'0');
       const month=String(today.getMonth()+1).padStart(2,'0');
       const year=today.getFullYear();
       const fulldate=`${day}-${month}-${year}`;
       document.getElementById("d1").innerHTML="Date:"+fulldate;
//time
      const hour=String(today.getHours()).padStart(2,'0');
      const minutes=String(today.getMinutes()).padStart(2,'0');
      const second=String(today.getSeconds()).padStart(2,'0');
      const fulltime=`${hour}:${minutes}:${second}`;
      document.getElementById("t1").innerHTML="Time:"+fulltime;
}    
       setInterval(updateClock,1000);
       updateClock();