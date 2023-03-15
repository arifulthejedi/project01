import React,{useState} from "react";
import { setScore } from '../../lib/score-storage';





export default function Inputs(props) {

    /*
    required props & function
    #score
    #store the score
    #close the modal
    #showing the submitted success toast
    */
    
    let [name,setName] = useState("");
    
   let  handleInp = function(event){
    setName(event.target.value)
   }

   let submitScore = function(){
    setScore({
        name:name,
        score:props.Score.Score
    }); //storing the score

    props.Score.resetScore(); //resetting the score
    props.modal.hideModal(); //closeing the modal
   }

    return (<>
        <div className="mt-3">
            <label className="form-label"><span className="">{"Submit Your Score"}</span></label>
            <input value={name}  onChange={handleInp} type="email" className="form-control" placeholder="Your Name" />
        </div>
        <div>
            <center className="m-2">
                <button disabled={name ? false : true } onClick={submitScore} className="btn btn-sm btn-outline-success m-2">{"Submit 🙂"}</button>
            </center>
        </div>
    </>)
}