
// import { ProductContext } from "../../shared/ProductContext";
import "./ProductPages.css";
import { Lista } from "../../components/Lista/Lista";
// import { useContext } from "react";

export default function ProductPages() {
 
//  const {usuario} = useContext()

  return (
    <div className="contenedor">
      <h2 className="titulo">Productos</h2>
      {/* <ProductContext.Provider value={usuario}> */}
        <div>
          <Lista></Lista>
        </div>
      {/* </ProductContext.Provider> */}
    </div>
  );
}
