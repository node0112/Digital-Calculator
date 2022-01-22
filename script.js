const numButtons=document.querySelectorAll('.number')
const opButtons=document.querySelectorAll('.buttons')
const dis=document.querySelector('.display-text')
const headerLinks=document.querySelectorAll('a')
const header=document.querySelector('.header-container')
const logo=document.querySelector('.left-logo')
let displayVal
let val
let num
let clckcount=0
var val1="",val2=""
let op=''
var ans
let opState=0
let opTimes=0

headerLinks.forEach(link=>{// appearance enhancement
    link.addEventListener('mouseover', ()=>{
        link.style.textShadow=" 0 0 30px yellow"
    })
    link.addEventListener('mouseout', ()=>{
        link.style.textShadow="none"
    })
})

logo.addEventListener('mouseover', ()=>{//more appearance enhancement
    logo.style.color="red"
})
logo.addEventListener('mouseout',()=>{
    logo.style.color="rgb(232, 255, 27)"
})

numButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        header.style.boxShadow="0 0 30px rgb(255, 31, 31)"
       button.style="box-shadow: none;"
       button.style.color="gray"
       setTimeout(function (){ boxShadow(val); }, 150)
       val="num"
       num=button.textContent
       if(clckcount==0){
           val1=val1+num
           displayWrite(val1)
       }
        if(clckcount==1){
           val1=val1+(num)
           displayWrite(val1)
        }
        if(opTimes==1||clckcount==2){
            clckcount=3
            val2=val2+num
            displayWrite(val2)
            opState=1
        }
    })
})

opButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
       header.style.boxShadow="0 0 30px rgb(255, 31, 31)"
       button.style="box-shadow: none;"
       button.style.color="gray"
       val="op"
       num=button.textContent
       if(num=="+"||num=="-"||num=="x"||num=="÷"){
            if(opState==0 && opTimes==0){ //default first time operation is performed
               op=num 
               displayWrite(op)
               opState=1
               opTimes=1
               clckcount=2
           }
           else if(opState==1 && opTimes>0){
            calculate(val1,val2,op)
            val1=ans
            op=num
            opState=1
            val2=''
            clckcount=2
           }
           else if(opState==0 && opTimes==1){
               val2=''
               val1=ans
               clckcount=2
               op=num
               
           }
       }
       setTimeout(function (){ boxShadow(val); }, 150)
       if(num=="="){
           equal()
       }
       if(num=="CLEAR"){
           clear()
    }
    })
})

function clear(){
        num=0
        clckcount=0
        val1=''
        val2=''
        op=''
        ans=0
        opTimes=0
        opState=0
        displayWrite(num)
}
function equal(){
    header.style.boxShadow="0 0 30px green"
    if(val2=='' || val1==''|| op==''){
        displayWrite("error")
        setTimeout(function () {clear()},1000)
        header.style.boxShadow="0 0 30px yellow"
    }
    else{
    console.log(val1,op,val2)
    calculate(val1,val2,op)
    opTimes=1
    opState=0
    }
}

function calculate(val1,val2,op){
    val1=parseFloat(val1)
    val2=parseFloat(val2)
    if(op=="+"){
       ans=val1+val2
       displayWrite(ans)
    }
    if(op=="-"){
      ans=val1-val2
       displayWrite(ans)
    }
    if(op=="x"){
      ans=val1*val2
       displayWrite(ans)
    }
    if(op=="÷"){
        if(val2==0){
            ans="error"
            displayWrite(ans)
        }
        else{
      Math.floor((ans=val1/val2))
       displayWrite(ans)
    }
    }
}

//////////////////DISPLAY NUMBERS\\\\\\\\\\\\\\\\
function displayWrite(num){
    displayVal=num
    if(clckcount==11||clckcount==33){
      displayVal=displayVal+num
    }
     dis.textContent=displayVal
}

function boxShadow(val){
    if(val=="num"){
    numButtons.forEach(button =>{
        button.style.boxShadow="0 0 10px black"  
        button.style.color="white"}
    )}
    else if(val=="op"){
        opButtons.forEach(button =>{
            button.style.boxShadow="0 0 20px black"  
            button.style.color="white"
    })
    }
}