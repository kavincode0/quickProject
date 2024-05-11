const coin = document.querySelector("#coin")
const button = document.querySelector("#flip")
const stat = document.querySelector("#status")
const head = document.querySelector("#headsCnt")
const tail = document.querySelector("#tailsCnt")

let headsCnt = 0;
let tailsCnt = 0;

function Result(result){
    if(result === 'heads'){
        headsCnt++;
        head.innerHTML = headsCnt;
    }
    else{
        tailsCnt++;
        tail.innerHTML = tailsCnt;
    }
    stat.innerText = result.toUpperCase();
}

function flipCoin(){
    const random = Math.random();
    const result = random < 0.5 ? 'heads' : 'tails'
    setTimeout(()=>{
        coin.setAttribute('class', 'animate-'+result)
        setTimeout(()=>Result(result), 2900);
    }, 100);
}

button.addEventListener("click", flipCoin);
  