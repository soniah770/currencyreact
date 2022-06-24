import React from 'react';



const InputData = ({
  value,
  setValue,
  currency,
  setCurrency,
  setFrontConversion,
  conversionValue,
  options,
  
}) => {
  
  return (
    <wrapper>


  <div>
  <select  style={{color:'#faf8f9'}} value={currency} onChange={(e) => setCurrency(e.target.value)}>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
      </div>
 <br/>
      {/* input */}
      <div >
        <input style={{color:'#faf8f9'}}
          type="number"
          className="form-input"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setFrontConversion(conversionValue);
          }}
        />
      </div>

    
    </wrapper>
  );
};

export default InputData;
