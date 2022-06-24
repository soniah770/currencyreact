import React from 'react';



const InputDatasec = ({
  value,
  setValue,
  currency,
  setCurrency,
  setConversion,
  converValue,
  options,
  
}) => {
  return (
    <>

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
          className="form"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setConversion(converValue);
          }}
        />
      </div>

    
      </>
  );
};

export default InputDatasec;
