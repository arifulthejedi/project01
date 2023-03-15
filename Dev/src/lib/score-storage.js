//make custom hook that store 5 people score in que order
//the function set player score in queue order
//getScore return the saved local storeage item
/*
score = {
    name:"Name",
    score:34
}
*/


export function setScore(scoreObjs){

    let scores =  localStorage.getItem("fly-or-not");
    if(!scores){
       localStorage.setItem("fly-or-not",JSON.stringify([]));
    }   
    scores = JSON.parse(localStorage.getItem("fly-or-not"));

    scores.unshift(scoreObjs); //inserted the score

    let sortedList = scores.sort((a,b) => b.score - a.score) //sort in decending order

    if(sortedList.length > 5){
        sortedList.pop();
    }

    localStorage.setItem("fly-or-not",JSON.stringify(scores));
  }



export function getScores(){
    return JSON.parse(localStorage.getItem("fly-or-not"));
}