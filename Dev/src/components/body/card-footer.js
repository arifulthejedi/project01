//card footer
import React,{useEffect,useState,useContext}from "react";
import {Context} from "./body-main";
import {Answer} from "../../lib/functions";



function CardFooter(props){



//using the context
let {Score,button,modal,flip} = useContext(Context);  






//initiate the ans in state 
let [ans,setAns] = useState(null);  


let Yes = ()=>{setAns(true)}


let No = () => {setAns(false)};




useEffect(()=>{


    //for clicking yes
    if(ans == true ){
      let wright =  Answer(props.item,ans);   

      if(wright){
       /*for giving wright answer*/

       Score.incScore();//increment the score

       clearTimeout(props.timeoutId);//clearing  the timer
       flip.startFlip(); //start the flip
       button.disAble(); //disable the button   

     
       }else{
         //for giving wrong answer

         //clear the setTimeout
         clearTimeout(props.timeoutId);

         //enable the start button
         button.enAble();

         //timout flag
         modal.timeOut.current = false;

         //need to add call the modal
         modal.showModal();

       
       } 
    setAns(null);
    }

    //for clicking no
    if(ans == false ){
       let wright =  Answer(props.item,ans);
       if(wright){
       /*for giving wright answer*/

       Score.incScore();//increment the score

       clearTimeout(props.timeoutId);//clearing  the timer
       flip.startFlip(); //start the flip
       button.disAble(); //disable the button   


       }else{
            //for giving wrong answer
    
             //clear the setTimeout
             clearTimeout(props.timeoutId);
    
             //enable the start button
             button.enAble();
    
             //timout flag
             modal.timeOut.current = false;

             //need to add call the modal
            modal.showModal();

       }
       setAns(null);
    }

 },[ans])


    return (<>
               <div className="card-footer">
                      <button disabled={!button.disable} id="yes" onClick={Yes} className="btn btn-sm btn-success m-1">YES</button>
                      <button disabled={!button.disable} id="no" onClick={No}  className="btn btn-sm btn-danger m-1">NO</button>
                </div>
    </>)
}

export default CardFooter;
