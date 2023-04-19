import React from "react";
import "./Modal.scss"
import { From } from "../Form/From";

export const Modal = ({ show, close }) => {
  return (
    <>
      {show ? (
        <div className="modalContainer" onClick={() => close()}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>

                <header className="modal_header">
                <h2 className="modal_header-title"> Comentarios </h2>
                <button className="close" onClick={() => close()}>
                    <img src="./assets/delete30.png" alt="close" />
                </button>
                </header>
            
            <main className="modal_content"> 
                <From/>
            </main>
          </div>
        </div>
      ) : null}
    </>
  );
};
