import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import "./print.css";

const PrintBar = ({ print }) => {

  
  //console.log(print);

  const ComponentToPrint = React.forwardRef((props, ref) => (
    <div ref={ref} className="print-only   ">
      <div className="print-body">
        <div
          style={{ marginLeft: "7px", fontSize: "230px", fontWeight: "bold" }}
        >
          {print[0]?.description}
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
            {print[0]?.pattern}
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
            {print[0]?.binCode}
          </div>
          <div style={{ marginLeft: "7px", fontSize: "120px" }}>
            {print[0]?.groupName}
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
            {print[0]?.plyinfo}
          </div>
          <div>
            <img src={print[0]?.barCode} style={{ width: "200px" }}  alt="Logo"/>
          </div>
          <div
            style={{ marginLeft: "7px", fontSize: "120px", fontWeight: "bold" }}
          >
            {print[0]?.loadindex}
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
            {print[0]?.pickConfig}
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
            {print[0]?.palletConfig}
          </div>
        </div>
      </div>
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
