import { useState } from "react";
import "./styles.css";

export default function App() {
  const [indob, setindob] = useState("");
  const [inlno, setinlno] = useState("");

  const [check, setcheck] = useState("");

  function onChangeHandler(number) {
    var dob = number.target.value;
    setindob(dob);
  }

  function onChangeHandler1(number) {
    var lnumber = number.target.value;
    setinlno(lnumber);
  }
  function calculateSum(indob) {
    var sum = 0;
    for (var i = 0; i < indob.length; i++) {
      if (indob[i] >= "0" && indob[i] <= "9") {
        sum = sum + Number(indob[i]);
      }
    }
    return sum;
  }
  function OnClickHandler() {
    var sum = calculateSum(indob);

    if (sum % inlno == "0") {
      setcheck("Hurray!! Your birthdate is lucky.😀");
    } else {
      setcheck("oops!! Your birthdate is not lucky.😐");
    }
  }

  return (
    <div className="text">
      <h1>Is Your Birthday Lucky?</h1>
      <p className="para">Lets Check Here!</p>
      <label className="input-label" htmlFor="inputDOB">
        {" "}
        Enter Your Birth Date:
      </label>
      <br />
      <input
        type="date"
        id="inputDOB"
        onChange={onChangeHandler}
        className="input"
      />
      <br />
      <label className="input-label" htmlFor="inputLuckyno">
        {" "}
        Enter Your Lucky Number:
      </label>
      <br />
      <input
        type="number"
        id="inputLuckyno"
        onChange={onChangeHandler1}
        className="input"
      />
      <br />
      <button onClick={OnClickHandler} className="button">
        Check
      </button>
      <p className="message">{check}</p>
    </div>
  );
}
