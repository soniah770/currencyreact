import React from 'react';



const InputFieldsec = ({
  value,
  setValue,
  currency,
  setCurrency,
  setFrontConversion,
  conversionValue,
  options,
  
}) => {
  // jsx
  return (
    <wrapper>

  {/* select-box */}
  <div >
  <select  style={{color:'#eb5f57'}} value={currency} onChange={(e) => setCurrency(e.target.value)}>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
      </div>
 <br/>
      {/* input */}
      <div >
       <input
       style={{color:'#eb5f57'}}
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

export default InputFieldsec;
