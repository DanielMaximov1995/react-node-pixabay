import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Modal = (props) => {
    const { children , choose } = props
  const showModal = useSelector((state) => state.showModal);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch({type : 'MODAL_STATUS'})
  }

  if (showModal !== choose) {
    return null;
  }

  return (
    <div className="fixed z-50 top-0 left-0 w-full transition-all duration-300 overflow-y-auto h-full backdrop-blur bg-opacity-50 flex items-center justify-center z-high">
        <div className='absolute w-full h-full' onClick={onClose}/>
      <div className="bg-white relative h-auto rounded-lg shadow-lg">
        <div className='absolute right-7 top-7'>
        <button onClick={onClose} className='text-red-600 font-semibold text-2xl'>X</button>
        </div>
        <div className='py-20'>
        {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
