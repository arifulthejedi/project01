//Header component
import React from "react";


export default function Header(props) {


    //controller logig for mous anf onkey up
    let controller = (<div className="input-group m-2">
        <label className="input-group-text" ><i className={props.controller === "Mouse" ? "bi bi-mouse2-fill" : "bi bi-keyboard-fill"}></i></label>
        <select value={props.controller} onChange={props.selectController} className="form-select">
            <option value="Mouse">Mouse</option>
            <option value="key">Key-Board</option>
        </select>
    </div>)



    return (<>
        <header id="header">
            <div id="item-container">
                <nav className="navbar navbar-light bg-light">
                    <form className="container-fluid justify-content-end me-4">
                        <div className="d-flex">
                            <button onClick={props.showModal} id="champion" type="button" className="btn btn-outline-secondary m-2">
                                <i className="bi bi-trophy-fill"></i>
                            </button>
                            {/* {window.innerWidth > 850 ? controller : false} */}
                        </div>
                        <div>
                            <div style={{ width: '80px' }}></div>
                        </div>
                    </form>
                </nav>
            </div>
        </header></>);

}