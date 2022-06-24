import React from 'react';



const InputData = ({
  value,
  setValue,
  cur,
  setCur,
  setFrontConversion,
  conversionValue,
  options,

}) => {

  return (

   <>
      <div>
        <select style={{ color: '#faf8f9' }} value={cur} onChange={(e) => setCur(e.target.value)}>
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
      </div>
      <br />
      {/* input */}
      <div >
        <input style={{ color: '#faf8f9' }}
          type="number"
          className="form"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setFrontConversion(conversionValue);
          }}
        />
      </div>

      </> 
  );
};

export default InputData;
