import React from 'react';

function Pagination({ pageNo, onNext, onPrev }) {
    return (
        <div className='bg-gray-400 p-4 mt-8 flex justify-center gap-4'>
            <button onClick={onPrev} className="text-white bg-blue-500 px-4 py-2 rounded">
                Previous
            </button>
            <span className="text-xl font-bold">{pageNo}</span>
            <button onClick={onNext} className="text-white bg-blue-500 px-4 py-2 rounded">
                Next
            </button>
        </div>
    );
}

export default Pagination;
