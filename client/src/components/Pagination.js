import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchImages } from '../redux/actions/ImageActions';
import ChevronIcon from './Icons/Chevron Icon';

const Pagination = (props) => {
  const { currentPage, totalPages , query} = props  
  const dispatch = useDispatch();
  const navigate = useNavigate()

    // generate an array of page numbers based on current page and total pages
  const showPageNumbers = () => {
    const maxPageItems = 10; 
    const halfMax = Math.floor(maxPageItems / 2);
    const startPage = Math.max(currentPage - halfMax, 1);
    const endPage = Math.min(startPage + maxPageItems - 1, totalPages);
    
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
};

  const handlePageClick = (page) => {
    navigate(`?page=${page}&query=${query}`)
    dispatch(fetchImages(query, page, 'latest')); 
  };

  return (
    <div className='flex justify-center py-2'>
      <div className="flex text-gray-700">
        <button
          className={`h-12 w-[100px] mr-1 flex justify-center items-center rounded-full bg-primary cursor-pointer ${
            currentPage === 1 ? 'pointer-events-none opacity-50' : ''
          }`}
          onClick={() => handlePageClick(currentPage - 1)}
        >
          <ChevronIcon position='left' />
        </button>
        <div className="flex h-12 font-medium rounded-full bg-primary">
          {showPageNumbers().map((page) => (
            <div
              key={page}
              className={`w-12 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full ${
                page === currentPage ? 'bg-secondary text-white text-2xl pointer-events-none' : ''
              }`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </div>
          ))}
        </div>
        <button
          className={`h-12 w-[100px] ml-1 flex justify-center items-center rounded-full bg-primary cursor-pointer ${
            currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
          }`}
          onClick={() => handlePageClick(currentPage + 1)}
        >
          <ChevronIcon position='right' />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
