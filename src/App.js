import { useEffect, useState } from 'react';
import InputData from './InputData';
import Footer from './Footer';
import InputDatasec from './InputDatasec';
const url = `https://v6.exchangerate-api.com/v6/6cbbba97b763887effc4b36c/latest/NOK`;

function App() {
  //# states
  const [options, setOptions] = useState(['NOK', 'IRR']);
  const [firstCurrency, setFirstCurrency] = useState('NOK');
  const [secondCurrency, setSecondCurrency] = useState('IRR');
  const [firstValue, setFirstValue] = useState('1');
  const [secondValue, setSecondValue] = useState('');
  const [frontConversion, setFrontConversion] = useState(true);

  //# useEffect
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // get rates
        const CONVERSION_RATES = data.conversion_rates;

        // set available options to the select element
        setOptions([...Object.keys(CONVERSION_RATES)]);

        // calculate conversion rate
        const rate =
          CONVERSION_RATES[secondCurrency] / CONVERSION_RATES[firstCurrency];

        // check conversion direction
        if (frontConversion) {
          // update value
          setSecondValue((firstValue * rate).toFixed(2));
        } else {
          setFirstValue((secondValue / rate).toFixed(2));
        }
      });
  }, [firstValue, secondValue, firstCurrency, secondCurrency, frontConversion]);

  // jsx
  return (
    <main>
      <header>
        <div className="container">
          <InputData
             
            value={firstValue}
            setValue={setFirstValue}
            currency={firstCurrency}
            setCurrency={setFirstCurrency}
            setFrontConversion={setFrontConversion}
            conversionValue={true}
            options={options}
            style={{color: 'pink'}}
         
          />
          <br/>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>{' '}
          </span>
          <br/><br/>
        
           <div style={{color:'blue'}}>
          <InputDatasec
         
          
            value={secondValue}
            setValue={setSecondValue}
            currency={secondCurrency}
            setCurrency={setSecondCurrency}
            setFrontConversion={setFrontConversion}
            conversionValue={false}
            options={options}
           

          />
        </div>
        </div>
      </header>

      <Footer />
    </main>
  );
}

export default App;
