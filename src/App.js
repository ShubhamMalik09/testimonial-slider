import './App.css';
import Testimonials from './components/Testimonials';
import reviews from './data';
import React, { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);
  return (
    <div className=' flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'> 
      <div className='text-center'>
        <h1 className=' text-4xl font-bold'>Our Testimonials</h1>
        <div className=' bg-violet-400 h-[4px] w-1/5 mx-auto mt-1'></div>
        <Testimonials reviews={reviews} count={count} setCount={setCount}/>
      </div> 
    </div>
  );
}

export default App;
