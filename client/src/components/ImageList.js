import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageItem from './ImageItem';
import Pagination from './Pagination';

const ImageList = (props) => {
  const { pageNumber , query } = props
  const { images , pages  } = useSelector((state) => state.images);

  return (
    <div>
      <div className="flex flex-wrap">
      {images.map((image) => (
        <ImageItem key={image.id} image={image} />
      ))}
    </div>
    {
      pages > 0 &&
      <Pagination currentPage={pageNumber} query={query} totalPages={pages}/>
    }
    </div>
  );
};

export default ImageList;
