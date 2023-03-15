//body main
import React, { useRef, useState,createContext } from "react";
import Card from "./card";
import Reboot from "./reboot";
import ModalInp from "../modals/modal";



//creating contex
export const Context = createContext();



export default function Body(props) {



  //managing state for flip
  let [flip, setFlip] = useState(false);

  let startFlip = () => {
    setFlip(true);
  }

  let stopFlip = () => {
    setFlip(false);
  }

  //managing state for startbutton disable
  let [disable, setDisable] = useState(false);
  let enAble = () => setDisable(false);
  let disAble = () => setDisable(true);


  //managing the modal to show
  let [shown, setModalShown] = useState(false);
  let showModal = () => setModalShown(true);
  let hideModal = () => setModalShown(false);
  let timeOut = useRef(false);


  //defining the score variable and managing the score
  let Score = useRef(0);
  let incScore = () => ++Score.current;
  let resetScore = () => Score.current = 0;



  //the full context object
  let context = {
    flip: {
      flip: flip,
      startFlip: startFlip,
      stopFlip: stopFlip
    },
    button: {
      disable: disable,
      enAble: enAble,
      disAble: disAble
    },
    modal: {
      shown: shown,
      showModal: showModal,
      hideModal: hideModal,
      timeOut: timeOut
    },
    Score: {
      Score: Score.current,
      incScore: incScore,
      resetScore: resetScore
    }

  };




  return (<>
    <div id="body-container">
      <div>
        {/*Card &  reboot*/}
        <Context.Provider value={context}>
          <Card flip={flip} stopFlip={stopFlip} />
          <Reboot startFlip={startFlip} />
          <ModalInp />
        </Context.Provider>
      </div>
    </div>
  </>);
}