//start and stop section
//body main
import React,{memo,useContext} from "react";
import {Context} from "./body-main";



function Reboot(props){
//context
let {button} = useContext(Context);
  

    return (<>
      <div id="buttons" className="d-flex flex-row justify-content-center mt-4">
               <div className="btn-group" role="group" aria-label="Basic outlined example">
                  <button onClick={props.startFlip} type="button" className="btn btn-outline-primary" disabled={button.disable}><i className="bi bi-stopwatch-fill me-1"></i>Start</button>
                  <button onClick={()=> window.location.reload()} type="button" className="btn btn-outline-primary"><i className="bi bi-arrow-clockwise"></i>Re-load</button>
               </div>
      </div>
    </>);
}

export default memo(Reboot);