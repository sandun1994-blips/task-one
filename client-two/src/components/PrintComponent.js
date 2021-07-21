import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import "./print.css";
import Barcode from "react-barcode";


const PrintBar = ({ print }) => {

  


const ComponentToPrint = React.forwardRef((props, ref) => (
  <div ref={ref} className="print-only   ">
   {
     

    ( ()=>{
           let post=[]

       for (let i = 0; i < print.length; i++) {

        let copies = print[i].pickConfig

        for (let x = 0; x < copies; x++) {
          
          post.push(<div className="print-body">
          <div
            style={{ marginLeft: "7px", fontSize: "230px", fontWeight: "bold" }}
          >
            {print[i]?.description}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{ marginLeft: "7px", fontSize: "180px", fontWeight: "bold" }}
            >
              {print[i]?.pattern}
            </div>
            <div
              style={{
                backgroundColor: "white",
                fontSize: "70px",
                borderColor: "black",
                borderStyle: "solid",
              }}
            >
              May21
            </div>
          </div>
     
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                fontSize: "50px",
                borderColor: "black",
                borderStyle: "solid",
                borderRadius: "50%",
                width: "200px",
                height: "100px",
                textAlign: "center",
              }}
            >
              {print[i]?.binCode}
            </div>
            <div style={{ marginLeft: "7px", fontSize: "120px" }}>
              {print[i]?.groupName}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{ marginLeft: "7px", fontSize: "120px", fontWeight: "bold" }}
            >
              {print[i]?.plyinfo}
            </div>
            <div>
              <Barcode value={print[i]?.stockCode}/>
            </div>
            <div
              style={{ marginLeft: "7px", fontSize: "120px", fontWeight: "bold" }}
            >
              {print[i]?.loadindex}
            </div>
          </div>
          <div style={{ display: "flex", marginLeft: "70mm" }}>
            <div
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "50px",
                borderColor: "black",
                borderStyle: "solid",
                borderRadius: "50%",
                width: "200px",
                height: "100px",
                textAlign: "center",
              }}
            >
              {print[i]?.pickConfig}
            </div>
            <div
              style={{
                backgroundColor: "white",
                fontSize: "50px",
                borderColor: "black",
                borderStyle: "solid",
                textAlign: "center",
              }}
            >
              {print[i]?.palletConfig}
            </div>
          </div>
        </div> )
          
        }
       
     
       }
       return post
     })
     ()
   }
  </div>
));

  const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <a
            href="#"
            className="submitButton"
            style={{ textDecoration: "none" }}
          >
            SUBMIT
          </a>
        )}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};

export default PrintBar;













