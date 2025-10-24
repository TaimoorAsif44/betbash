import React, { useState } from 'react'
import './style.scss';

function LoopPage() {
    const [number, setNumber] = useState("");
    const [text, setText] = useState("");
    const [render, setRender] = useState(false);
    return (
        <div className="container mt-10">
            <input placeholder='Write Some thing here' type='text' className='px-4 py-5 bg-gray-200 border-gray-800 border-2 rounded-sm' onChange={(e) => { setText(e.target.value) }} />

            <div className='w-full pt-5 flex gap-5 mx-auto justify-center'>
                <input className='px-4 py-5 bg-gray-200 border-gray-800 border-2 rounded-sm' type='number' onChange={(e) => { setNumber(e.target.value) }} />
                <button className='p-4 rounded-sm bg-purple-800 text-white' onClick={() => { setRender(true) }}>
                    Run
                </button>
            </div>

            {render && Array.from({ length: number }).map((_, i) => (
                <p key={i}>{text}</p>
            ))}
        </div>
    )
}

export default LoopPage