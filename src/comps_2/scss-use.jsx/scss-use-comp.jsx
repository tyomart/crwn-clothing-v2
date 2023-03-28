import './scss-use-styles.scss'

import { useRef, useEffect, useState } from 'react'


const ScssPlay = () => {

    const [state0, setState0] = useState(0) 

    function LogButtonClicks() {

  const countRef = useRef(0);
  
  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };
  console.log('I rendered!');

  useEffect(() =>  {
    setState0(state0++)
  }, []
  )

  return <button onClick={handle}>Click me , clicked {state0}</button>;
}

   // const myRef = useRef(null)
    
    return <div className='main'>
        <h2> Play here</h2>
        <p className='simple-txt'>
            bla bla bla lorem ipsum huipsum
        </p>
<div className='buts-row-1'>
   
        <button id='b1' className='but-1' 
            >PuP</button>
        <button id='b11' className='but-11'>PaP</button>
        <button id='b12' className='but-12'>PiP</button>
   
</div>
<div className='buts-row-2'>
    
        <button id='b21' className='but-1-inv' 
            >PuP inv</button>
        
    
</div>

    
   
        
<LogButtonClicks />

    </div>
}

export default ScssPlay 