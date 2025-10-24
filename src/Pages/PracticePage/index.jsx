import React, { useState } from 'react'
import './style.scss'
import LoopPage from '../looppage';
import PropsPage from '../PropsPage';


function PracticePage() {
    const [number, setNumber] = useState(0);

    function updateNumber(p) {
        if (p == "plus")
            setNumber(number + 1);
        else if (p == "minus") {
            setNumber(number - 1);
        }
        else {
            setNumber(0);
        }
    }
    return (
        <div className='container mx-auto'>
            <div className='w-full py-12 px-5'>
                <div className='grid grid-cols-5'>
                    <p className='text-3xl'>{number}</p>
                    <p className='text-3xl'>{number}</p>
                    <p className='text-3xl'>{number}</p>
                    <p className='text-3xl'>{number}</p>
                    <p className='text-3xl'>{number}</p>
                </div>
            </div>
            <div className='mt-12 flex justify-center mx-auto gap-6'>
                <button onClick={() => { updateNumber("plus") }} type="button" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"> + </button>
                <button onClick={() => { updateNumber("minus") }} type="button" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"> - </button>
                <button onClick={() => { updateNumber("") }} type="button" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"> 0 </button>
            </div>
            <div className='w-full py-12'>
                <LoopPage />
            </div>
            <div className='w-full py-12'>
                <PropsPage />
            </div>
        </div>
    )
}

export default PracticePage