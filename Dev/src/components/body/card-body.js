import React from "react";




export default function CardBody(props){


    return (<>
                  <div className="card-body">
                    <h5 className="card-title text-primary">
                    🛸 Fly or Not🛸
                    </h5>
                    <div style={{height:"20px"}}></div>
                      <h2 id="item" >{props.item.item}</h2>
                    <div style={{height:"20px"}}></div>
                  </div>
    </>)
}