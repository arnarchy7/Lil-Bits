import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function IncDecCounterChange() {
  const guestsString = sessionStorage.getItem('guests');
  const guests = JSON.parse(guestsString);

  const [num, setNum] = useState(guests);
  const incNum = () => {
    if (num < 10) {
      setNum(num + 1);
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

  const handleClickDec = () => {
    decNum();
    if (num > 1) {
      sessionStorage.setItem('guests', JSON.stringify(num - 1));
    }
  };

  const handleClickInc = () => {
    incNum();
    if (num < 10) {
      sessionStorage.setItem('guests', JSON.stringify(num + 1));
    }
  };

  return (
    <div className="counter">
      <div className="input-group-prepend">
        <button className="btn-dec" type="button" onClick={handleClickDec}>
          -
        </button>
      </div>
      <input type="text" className="form-counter" value={num} onChange={handleChange} />
      <div className="input-group-prepend">
        <button className="btn-inc" type="button" onClick={handleClickInc}>
          +
        </button>
      </div>
    </div>
  );
}

export default IncDecCounterChange;
