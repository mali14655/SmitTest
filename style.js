document.addEventListener('click',function(e){
    let time=new Date();
    let hour1=time.getHours();
    let mins=time.getMinutes();
    // console.log(hour1);
    // console.log(mins) ;
    let mytime;
    if(hour1<12){
        mytime="AM"
    }  else{
        mytime="PM"
    }
    document.querySelector('.hour1').textContent=hour1+':'+mins+" "+mytime ;
    // console.log(e);
    let x=e.clientX;
    let y=e.clientY;
    document.querySelector('.x').textContent=x;
    document.querySelector('.y').textContent=y;


})