import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import PrintBar from "./components/PrintComponent";

function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [print, setPrint] = useState([]);
  const [poId,setPoId] =useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      setUser(res.data);
     // console.log(user);
      //console.log(res.data.accessToken);
      const detail = await axios
        .create({
          baseURL: "http://localhost:5000/api",
          headers: { Authorization: "Bearer" + " " + res.data.accessToken },
        })
        .post("/detail");

      //console.log(detail);
      setPrint(detail.data.data.print);

      //console.log(detail.data.data.print);
    } catch (err) {
      console.log(err);
    }
  };

  //console.log(user);
  const handleReset = () => {
    setUsername(null);
    setPassword(null);
  };

  const handleResetId = () => {};

//  console.log(print[0]?.stockCode);
//  console.log(print[0]?.stockCode ===parseInt(poId));
//  if(print[0]?.binCode ){
//      setPoId(print[0]?.binCode)
//  }

  return (
    <div className="container">
      {user ? (
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
              {(print[0]?.stockCode ===parseInt(poId) )?<PrintBar print={print} />:<button className="resetButton" >
              Try
              </button>}
              <button className="resetButton" onClick={handleResetId}>
                RESET
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="login">
          <form>
            <span className="formTitle">LOGIN</span>
            <input
              type="text"
              placeholder="User Name"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="Group">
              <button className="submitButton" onClick={handleSubmit}>
                LOGIN
              </button>

              <button className="resetButton" onClick={handleReset}>
                RESET
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
