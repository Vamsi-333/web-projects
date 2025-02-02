/* side bar */
function sidemenu(){
    const sidemenu=document.querySelector('.sidemenu')
    sidemenu.style.display ='flex'
}
function close(){
    const sidemenu=document.querySelector('.sidemenu')
    sidemenu.style.display="none"

}

function percent(){
    let num=document.getElementById("pn1").value;
    let per=document.getElementById("pp").value;
    document.getElementById("pp").value=per+"%";
    document.getElementById("per").value=(num/100)*per; 
}

function even(){
    let n1=document.getElementById("en1").value;
    if(n1%2==0){
        document.getElementById("anse").value="even";
    }
    else{
        document.getElementById("anse").value="odd";

    }
    
}

function prime(){
    let n1=document.getElementById("en1").value;
    if(parseInt(n1)<2){document.getElementById("anse").value="!prime";}
    else{
        let sqrt=Math.sqrt(n1);
        for (let i=2;i<=sqrt;i++){
            if(parseInt(n1)%i==0){
                document.getElementById("anse").value="not a prime";
            }
        else{
            document.getElementById("anse").value=" prime";

        }
        }
    }

}

function palindrome(){
    let ip=document.getElementById("pal").value;
    let rev=ip.split('').reverse().join('');
    document.getElementById("rev").value=rev;
    if(ip==rev){
        document.getElementById("palans").value="palindrome"
    }
    else{
        document.getElementById("palans").value="not palindrome"

    }
}

function perfect(){
    let per=document.getElementById("pn").value;
    
    let lst=[];
    for(let i=1;i<parseInt(per);i++){
        if(per%i==0){
            lst.push(parseInt(i))
        }
    }
    console.log(lst);
    let sum=0;
    for(let i=0;i<lst.length;i++){
        sum+=lst[i];
    }
    if(sum==per){
        document.getElementById("pans").value=`${per} is perfect`
    }
    else{
        document.getElementById("pans").value=`${per} is not perfect`
    }
}


// caliculator
const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}


// area of square
function sa(){
    document.getElementById("shape").textContent=`square`
    const container = document.querySelector('.con3-2-1');
    container.innerHTML = '';
    const containor2= document.querySelector('.shp');
    containor2.innerHTML='';
    const sqr=document.createElement('div');
    sqr.className='square';
    document.querySelector('.shp').appendChild(sqr);
    const ip=document.createElement('input')
    ip.id='ip'
    ip.placeholder='pls enter the side value'
    document.querySelector('.con3-2-1').appendChild(ip)
    const btn=document.createElement('button');
    btn.onclick=sarea;
    btn.textContent='submit'
    btn.style.width='100px'
    document.querySelector('.con3-2-1').appendChild(btn);
    const msg=document.createElement('p');
    msg.id='msg'
    document.querySelector('.con3-2-1').appendChild(msg)
    function sarea(){
        let side=document.getElementById('ip').value;
        msg.textContent="area of square is "+side*side;
    }
}
// area of rectangle
function ra(){
    document.getElementById("shape").textContent=`rectangle`
    const container = document.querySelector('.con3-2-1');
    container.innerHTML = '';
    const containor2= document.querySelector('.shp');
    containor2.innerHTML='';
    const rect = document.createElement('div');
    rect.className='rectangle'
    document.querySelector('.shp').appendChild(rect);
    const iprl=document.createElement('input')
    iprl.placeholder='enter length'
    iprl.id='iprel'
    document.querySelector('.con3-2-1').appendChild(iprl)
    const iprb=document.createElement('input')
    iprb.placeholder='enter breadth'
    iprb.id='ipreb'
    document.querySelector('.con3-2-1').appendChild(iprb)
    let btn=document.createElement('button');
    btn.textContent='submit'
    btn.style.width='100px'
    btn.onclick=rarea;
    document.querySelector('.con3-2-1').appendChild(btn)
    const msg=document.createElement('p');
    msg.id='msg'
    document.querySelector('.con3-2-1').appendChild(msg)
    function rarea(){
        let len=document.getElementById('iprel').value;
        let bth=document.getElementById('ipreb').value;
        msg.textContent='area of rectangle is'+len*bth;
    }

}
// area of traingle

function ta(){
    document.getElementById("shape").textContent=`triangle`
    // clearing the shp block before inserting the traingle
    const containor=document.querySelector('.shp')
    containor.innerHTML='';
    // clearing the con3-2-1  block
    const containor2=document.querySelector('.con3-2-1')
    containor2.innerHTML='';
    const tra = document.createElement('div');
    tra.className='traingle'
    document.querySelector('.shp').appendChild(tra);
    // creating input for height 
    const height=document.createElement('input')
    height.placeholder='enter height'
    height.id='Height'
    document.querySelector('.con3-2-1').appendChild(height)
    // creating input for base
    const base=document.createElement('input')
    base.placeholder='enter base'
    base.id='Base'
    document.querySelector('.con3-2-1').appendChild(base)
    // creating button to submit
    const btn=document.createElement('button')
    btn.textContent='submit'
    btn.style.width='100px'
    btn.onclick=tarea
    document.querySelector('.con3-2-1').appendChild(btn)
    const msg=document.createElement('p')
    msg.id='msg'
    document.querySelector('.con3-2-1').appendChild(msg)
    function tarea(){
        let height=document.getElementById('Height');
        let base=document.getElementById('Base');
        msg.textContent='area of traingle='+0.5*base.value*height.value
    }
 
} 

// area of circle
function ca(){
    document.getElementById("shape").textContent=`circle`
    const container = document.querySelector('.con3-2-1');
    container.innerHTML = '';
    const containor2= document.querySelector('.shp');
    containor2.innerHTML='';
    const ca=document.createElement('div');
    ca.className='circle';
    document.querySelector('.shp').appendChild(ca);
    const rinp=document.createElement('input')
    rinp.placeholder='enter radius'
    rinp.id='rad'
    document.querySelector('.con3-2-1').appendChild(rinp)
    const btn=document.createElement('button');
    btn.textContent='submit';
    btn.style.width='100px';
    btn.onclick=rad
    document.querySelector('.con3-2-1').appendChild(btn)
    const msg=document.createElement('p')
    msg.id='msg'
    document.querySelector('.con3-2-1').appendChild(msg)
    function rad(){
        let radius=document.getElementById('rad').value;
        msg.innerHTML='area of circle is='+3.14*radius*radius;  
    }
    
}
function pen(){
    document.getElementById("shape").textContent=`circle`
    const container = document.querySelector('.con3-2-1');
    container.innerHTML = '';
    const containor2= document.querySelector('.shp');
    containor2.innerHTML='';
    const ca=document.createElement('div');
    ca.className='pentagon';
    document.querySelector('.shp').appendChild(ca);
    const rinp=document.createElement('input')
    rinp.placeholder='enter radius'
    rinp.id='rad'
    document.querySelector('.con3-2-1').appendChild(rinp)
    const btn=document.createElement('button');
    btn.textContent='submit';
    btn.style.width='100px';
    btn.onclick=rad
    document.querySelector('.con3-2-1').appendChild(btn)
    const msg=document.createElement('p')
    msg.id='msg'
    document.querySelector('.con3-2-1').appendChild(msg)
    function rad(){
        let radius=document.getElementById('rad').value;
        msg.innerHTML='area of circle is='+3.14*radius*radius;  
    }
    
}

// fortable printing
function table(){
    let t=document.getElementById("Tnum").value;
    if (t==parseInt(t)){
        let st=document.getElementById("st");
        st.innerHTML=''; // it will clear the previous content
        for (let i=1; i<=10;i++){
            st.innerHTML+=t+"X"+i+"="+t*i+"<br>";
            
        }
    }
    else{
        alert("boss only numbers allowed")
    }
}
