import React from 'react';
import './Writers.css'

import writer1 from '../../../../images/writers/writer-1.png';
import writer2 from '../../../../images/writers/writer-2.png';
import writer3 from '../../../../images/writers/writer-3.png';
import writer4 from '../../../../images/writers/writer-4.png';
import writer5 from '../../../../images/writers/writer-5.png';
import writer6 from '../../../../images/writers/writer-6.png';

const writers = [
    { name: 'Nazrul', country: 'Bangladesh', img: writer1 },
    { name: 'Ruskin', country: 'India', img: writer2 },
    { name: 'Stephen', country: 'Usa', img: writer3 },
    { name: 'zadi', country: 'Ireland', img: writer4 },
    { name: 'Sadaknama', country: 'London', img: writer5 },
    { name: 'albert', country: 'uk', img: writer6 },
]

const Writers = () => {
    return (
        <div className='container'>
            <marquee behavior="alternate" direction="down"><h2 className='text-danger text-center my-4 font-bold'>Book Writers</h2></marquee>
        </div>
    );
};

export default Writers;