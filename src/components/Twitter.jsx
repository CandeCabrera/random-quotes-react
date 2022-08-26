import React from 'react';

const Twitter = ({ quote, author, color } ) => {
   
    return (
        <div className='twitter'>
             <a style={{background: color}} href={`https://twitter.com/intent/tweet?text=${quote}%20Wrote%20by%20${author} `} target="_BLANK" class="btn glass-btn"><i class="fab fa-twitter"></i></a>
        </div>
       

    );
};

export default Twitter;