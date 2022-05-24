import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function IncDecCounter() {
  const [num, setNum] = useState(1);
  const incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  const decNum = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
  const handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <div className="counter">
      <div className="input-group-prepend">
        <button className="btn-dec" type="button" onClick={decNum}>
          -
        </button>
      </div>
      <input type="text" className="form-counter" value={num} onChange={handleChange} />
      <div className="input-group-prepend">
        <button className="btn-inc" type="button" onClick={incNum}>
          +
        </button>
      </div>
    </div>
  );
}
export default IncDecCounter;
