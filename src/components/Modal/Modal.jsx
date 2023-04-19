import React from "react";
import "./Modal.scss"

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
            
            <main className="modal_content"> This is Modal Content </main>
            
            <footer className="modal_footer">
              
              <button className="modal-close" onClick={() => close()}> Cancel </button>
              <button className="submit">Submit</button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
};
