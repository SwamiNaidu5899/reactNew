import "./add.css";
import { useRef } from "react";
import { useState } from "react";

const CrudOnAvng = () => {
  const inpElRef = useRef("");

  const [avengers, setAvengers] = useState(["Thor"]);

  const addAvenger = () => {
    const inpEl = inpElRef.current.value;
    if (inpEl !== "") {
      const newAvengers = [...avengers, inpEl];
      setAvengers(newAvengers);
    } else alert("input field should be required dude..");
  };

  const delAvg = (index) => {
    const newAvengers = avengers.filter((eachAvng, i) => i !== index);
    setAvengers(newAvengers);
  };

  const upAvg = (index) => {
    const ele = window.confirm("Do you want to Update");

    if (ele === true) {
      const cnfElref = window.prompt("Enter");
      // const inpEl = inpElRef.current.value;
      // const cnfEl = cnfElref.value
      const newAvengers = avengers.map((eachAvng, i) => {
        if (i === index) return cnfElref;
        else return eachAvng;
      });
      setAvengers(newAvengers);
    }
  };

  inpElRef.current.value = "";

  return (
    <div className="container">
      <form action="">
        <input
          type="text"
          ref={inpElRef}
          name=""
          id=""
          placeholder="Add or Update"
        />
      </form>
      <button id="btn" onClick={addAvenger}>
        Add
      </button>
      <div className="divCards">
        {avengers.map((eachAvng, i) => {
          return (
            <div className="card" key={i}>
              <h2>{eachAvng}</h2>
              <div>
                <button onClick={() => delAvg(i)}>Delete</button>
                <button onClick={() => upAvg(i)}>Update</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CrudOnAvng;
