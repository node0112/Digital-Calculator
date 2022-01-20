const numButtons=document.querySelectorAll('.number')
const opButtons=document.querySelectorAll('.buttons')
const dis=document.querySelector('.display-text')
let displayVal
let val
let num
let clckcount=0
var val1="",val2=""
let op
let ans

numButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
       button.style="box-shadow: none;"
       button.style.color="gray"
       setTimeout(function (){ boxShadow(val); }, 150)
       val="num"
       if(clckcount==0){
           clckcount=1
       }
       num=button.textContent
        if(clckcount==1){
           val1=val1+(num)
           displayWrite(val1)
        }
        if(clckcount==2||clckcount==3){
            clckcount=3
            val2=val2+num
            displayWrite(val2)
        }
    })
})

opButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
       button.style="box-shadow: none;"
       button.style.color="gray"
       val="op"
       num=button.textContent
       if(num=="+"||num=="-"||num=="x"||num=="÷"){
           op=num
           clck=2
       }
       setTimeout(function (){ boxShadow(val); }, 150)
       if(num!="="){
       displayWrite(num)
       clckcount=2
       }
       if(num=="CLEAR"){
           num=0
           clckcount=0
           val1=''
           val2=''
           op=''
           displayWrite(num)
       }
       if(num=="="){
           console.log(clckcount)
           clckcount=4
           calculate(val1,val2,op)
       }
    })
})

function calculate(val1,val2,op){
    val1=parseInt(val1)
    val2=parseInt(val2)
    if(op=="+"){
       ans=val1+val2
       clckcount=0
       displayWrite(ans)
    }
    if(op=="-"){
      ans=val1-val2
      clckcount=0
       displayWrite(ans)
    }
    if(op=="x"){
      ans=val1*val2
      clckcount=0
       displayWrite(ans)
    }
    if(op=="÷"){
      ans=val1/val2
      clckcount=0
       displayWrite(ans)
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