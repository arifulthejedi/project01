
export function getRandomNumber(length,prevNumber) {
  let randomNumber = Math.round(Math.random() * (length));
  while (randomNumber === prevNumber) {
    randomNumber = Math.round(Math.random() * (length));
  }
    return randomNumber; //has to store this number as prevNumber
}



//detect right or wrong answer
export function Answer(obj,ans){
    if(obj.canFly === ans)
        return true;
    else
       return false;
}



//score counter && return final score
export function scoreCounter(prevScore,obj,ans){

    if(ans)
       return ++prevScore;
    else
       return prevScore;
}


export function flip(el,time){
  let timer = Math.round(Math.random()*time);
  let deg = 0;
  let interValId = setInterval(()=>{
    deg = deg+50;
    el.style.transform = `rotateY(${deg}deg)`;
    if(deg >= timer){
      clearInterval(interValId);
      el.style.transform = `rotateY(0deg)`;
    }
  },50)
}
