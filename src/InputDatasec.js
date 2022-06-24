import React from 'react';



const InputDatasec = ({
  value,
  setValue,
  cur,
  setCur,
  setConver,
  converValue,
  options,
  
}) => {
  return (
    <>

  <div >
  <select  style={{color:'#eb5f57'}} value={cur} onChange={(e) => setCur(e.target.value)}>
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
            setConver(converValue);
          }}
        />
      </div>

    
      </>
  );
};

export default InputDatasec;
