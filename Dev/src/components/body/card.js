//whole card
import React from "react";
import { useRef, useEffect, useContext } from "react";
import Items from "../../lib/item-list";
import { getRandomNumber } from "../../lib/functions";
import CardBody from "./card-body";
import CardFooter from "./card-footer";
import { Context } from "./body-main";



function startFlip(el) {
  let deg = 0;
  let interValId = setInterval(() => {
    deg = deg + 50;
    el.style.transform = `rotateY(${deg}deg)`;
  }, 50)

  return interValId;
}


function stopFlip(el, interValId) {
  clearInterval(interValId);
  el.style.transform = `rotateY(0deg)`;
}






export default function Card(props) {
  let item = useRef({ item: "🐦" });
  let prevNumber = useRef(0);
  let timeoutId = useRef(null);
  let hide = useRef(true);

  //using the context
  let { button, modal } = useContext(Context);


  useEffect(() => {
    let body = document.querySelector("#body"); //card body
    let cardItem = document.querySelector("#item"); //card heading
    let counter = 1700; //counter for timeout


    if (props.flip) {

      //visibility visible
      cardItem.style.visibility = "hidden";


      //call the random object
      let randomNumber = getRandomNumber(Items.length - 1, prevNumber.current);
      prevNumber.current = randomNumber;
      item.current = Items[randomNumber];

      //flip machanism
      let timer = Math.round(Math.random() * 1500); //setting the limit of timer 

      let interValId = startFlip(body); //start the flip


      button.disAble();//disble the start button

      setTimeout(() => {
        stopFlip(body, interValId, cardItem);

        //visibility visible
        cardItem.style.visibility = "visible";


      }, timer);


      timeoutId.current = setTimeout(() => {
        /* This is the section for When Time out */

        //call the modaal
        modal.timeOut.current = true;//timeOut flag pass to modal
        modal.showModal(); //showing the modal

        //enabling the start button
        button.enAble();


      }, (counter + timer)); //counter+timer delay till the flip is stop

      props.stopFlip();//reseting the state of flip

    }
  });


  return (<>
    <div id="body">
      <div className="card text-center" style={{ minWidth: "18rem" }}>
        <CardBody item={item.current} hide={hide} />
        <CardFooter timeoutId={timeoutId.current} item={item.current} />
      </div>
    </div>
  </>);
}