import React from 'react';

const NextBtn = ({ goNext, color }) => {
    return (
        <div className="nextContainer">
            <div className='next' onClick={goNext} style={{background:color}}>
                <i class="fa-solid fa-chevron-right"></i>
             </div>
        </div>
    );
};

export default NextBtn;