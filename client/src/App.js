import React, { useEffect } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import ImageList from './components/ImageList';
import Modal from './components/Modal';
import CategorySelector from './components/Categories';
import { useDispatch } from 'react-redux';
import { fetchImages } from './redux/actions/ImageActions';
import { fetchCategories } from './redux/actions/categoriesActions';
import Home from './components/Home';

const App = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const pageNumber = parseInt(searchParams.get('page'));
  const query = searchParams.get('query');

  // fetch images based on query and page number
  useEffect(() => {
    // Check query and page number are available 
    pageNumber && query ? dispatch(fetchImages(query, pageNumber, 'latest')) : dispatch({ type: 'CLEAR_IMAGES' })
  }, [searchParams]);

  // fetch categories
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="mx-auto p-4 w-[60%]">
      <div className='flex justify-between px-4 items-center'>
        <h1 className="text-3xl font-bold mb-4 text-center text-info">MsApps Home Mission</h1>
        <p className='text-2xl capitalize text-info font-semibold tracking-wider	'>{query}</p>
        <CategorySelector />
      </div>
      <Routes>
        <Route path="/" element={query ? <ImageList pageNumber={pageNumber} query={query} /> : <Home />} />
        <Route path="/image/:id" element={<Modal />} />
      </Routes>
    </div>
  );
}

export default App;
