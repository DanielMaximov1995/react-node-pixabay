import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageItem from './ImageItem';
import Pagination from './Pagination';
import Progress from './Progress';

const ImageList = (props) => {
  const { pageNumber , query } = props
  const { images , pages , loading  } = useSelector((state) => state.images);

  return (
    <div>
      <div className="flex flex-wrap">
        {loading ? <div className='flex justify-center w-full py-10'><Progress/></div> : 
        <>
        {images.map((image) => (
        <ImageItem key={image.id} image={image} />
      ))}
      </>
      }
      
    </div>
    {
      !loading && pages > 0 &&
      <Pagination currentPage={pageNumber} query={query} totalPages={pages}/>
    }
    </div>
  );
};

export default ImageList;
