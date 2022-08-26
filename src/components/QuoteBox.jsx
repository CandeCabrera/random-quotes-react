import React from 'react';

const QuoteBox = ({ quote, author, color }) => {
    return (
        <div className='quoteBox'>
            <div>
            <i class="fa-solid fa-quote-left" style={{color:color}}></i>
            <p className='quote'>{quote}</p>
            </div>
            <p className='author' style={{color:color}}>{author} </p>

        </div>
    );
};

export default QuoteBox;