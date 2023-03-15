import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body/body-main";
import ScoreBoard from "./components/modals/modal-score-lists";
import React,{useState} from 'react';



function App() {


//modal for showing score
let [show,setShow] = useState(false);

let modal = () => {
  setShow(true);
}
let modalClose = () => {
  setShow(false);
}


  return (
   <>
    <Header showModal = {modal} />
    <Body />
    <Footer />
    <ScoreBoard show={show} modalClose={modalClose} />
    </>);
}

export default App;
