import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Context} from '../body/body-main';
import Inputs from './modal-input';


/*
In <Modal/> component
show = bin(this props show the modal if true)
onHide = bin(this props hide modal if true )

        size="md" //size of modal
        aria-labelledby="contained-modal-title-vcenter"
        centered //center the modal
        backdrop="static" //back drop
        keyboard={false} 

*/

export default function ModalInp(props) {

//import from the context
let {Score,modal} = useContext(Context);


//this function will call while cross button triggered
function crossModal(){

Score.resetScore();//reset the Score
modal.hideModal();//hide the modal
}


  return (
    <>
      <Modal show={modal.shown} onHide={crossModal}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
           <div style={{left:"10px",color:"red"}} className='fs-5'> 
           {modal.timeOut.current ? "Time Up!! ⌛" : "Wrong Answer ❌"}
           </div>
        </Modal.Header>
        <Modal.Body>
        <center className="mb-4">
          <div className="fs-2">
             <div style={Score.Score === 0 ? {color:"red"} : {color:"black"}}>{`Score : ${Score.Score}`}</div>
             {Score.Score === 0 ? "\n Better luck next time 🙁": false }
          </div>
        </center>
          {Score.Score > 0 ? <Inputs Score={Score} modal={modal} /> : false}
        </Modal.Body>
      </Modal>
    </>
  );
}

