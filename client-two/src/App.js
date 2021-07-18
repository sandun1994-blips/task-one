import "./App.css";
//import axios from "axios";
import React, { useState } from "react";
import PrintBar from "./components/PrintComponent";

function App() {
 // const [user, setUser] = useState(null);
  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");
 // const [print, setPrint] = useState([]);
 const [poId,setPoId] =useState('')
  //const handleSubmit = async (e) => {
   // e.preventDefault();
   // try {
     // const res = await axios.post("http://localhost:5000/api/login", {
       // username,
       // password,
      //});
      //setUser(res.data);
     // console.log(user);
      //console.log(res.data.accessToken);
     // const detail = await axios
        //.create({
         // baseURL: "http://localhost:5000/api",
         // headers: { Authorization: "Bearer" + " " + res.data.accessToken },
        //})
        //.post("/detail");

      //console.log(detail);
     // setPrint(detail.data.data.print);

      //console.log(detail.data.data.print);
   // } catch (err) {
     // console.log(err);
    //}
  //};

  //console.log(user);
  //const handleReset = () => {
    //setUsername(null);
    //setPassword(null);
  //};

  //const handleResetId = () => {};

//  console.log(print[0]?.stockCode);
//  console.log(print[0]?.stockCode ===parseInt(poId));
//  if(print[0]?.binCode ){
//      setPoId(print[0]?.binCode)
//  }





const  print=[
      {
        1:[
          {
          description: "Description",
          pattern: "Pattern H/L",
          binCode: "AA01A",
          groupName: "VREDESTEIN OH",
          plyinfo: "30PR",
          loadindex: "108/112(A8)",
          pickConfig: 2,
          palletConfig: "A2X6(+2)",
          barCode: "https://jet-marking.com/wp-content/uploads/2017/04/pasted-image-0-1.png"
        },
        {
          description: "Description  www",
          pattern: "Pattern H/L",
          binCode: "AA01A",
          groupName: "VREDESTEIN OH",
          plyinfo: "30PR",
          loadindex: "108/112(A8)",
          pickConfig: 4,
          palletConfig: "A2X6(+2)",
          barCode: "https://jet-marking.com/wp-content/uploads/2017/04/pasted-image-0-1.png"
        },{
          description: "Description",
          pattern: "Pattern H/L ww",
          binCode: "AA01A",
          groupName: "VREDESTEIN OH",
          plyinfo: "30PR",
          loadindex: "108/112(A8)",
          pickConfig: 10,
          palletConfig: "A2X6(+2)",
          barCode: "https://jet-marking.com/wp-content/uploads/2017/04/pasted-image-0-1.png"
        }

        ]
        }
      
    ]






 var x = print[0][`${poId}`]

// console.log(x);

// if(x){
//   return x
// }




  return (
    <div className="container">
      <div className="home">
          <form>
            <span className="formTitleTwo"> Enter Purchase Order ID</span>

            <input
              className="inputPo"
              type="number"
              placeholder="PO ID"
              value={poId}
              onChange={e=>setPoId( e.target.value)}
            />
            <div className="Group">
              {x && <PrintBar print={x} />}
             
              <button className="resetButton" >
                RESET
              </button>
            </div>
          </form>
        </div>
        
    </div>
  );
}

export default App;
