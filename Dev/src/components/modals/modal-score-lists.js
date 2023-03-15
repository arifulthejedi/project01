import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { getScores } from '../../lib/score-storage';



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


export default function ScoreBoard(props) {

  let scoreObj = getScores();
  let lists = "";

  let sorted = scoreObj ? scoreObj.sort((a, b) => b.score - a.score) : false;

  if (sorted) {
    lists = sorted.map((value, index) => {
      return (<li key={index} className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{value.name}</div>
          <p style={{ color: "red" }}>Score:{value.score}</p>
        </div>
        {index === 0 ? "👑 👑 👑" : false}
        {index === 1 ? "👑 👑 " : false}
        {index === 2 ? "👑 " : false}
      </li>);
    })
  }



  return (
    <>
      <Modal
        show={props.show}
        onHide={props.modalClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header style={{ border: "none" }} closeButton>
        </Modal.Header>
        <Modal.Body>
          <center className=" mt-0 mb-4">
            <div className="fs-4">
              {"🏆 Score Board 🏆"}
            </div>
          </center>
          <ol className="list-group list-group-numbered">
            {lists ? lists : <center style={{ color: "red" }}>No Record Found 🙁</center>}
          </ol>
        </Modal.Body>
      </Modal>
    </>
  );
}

