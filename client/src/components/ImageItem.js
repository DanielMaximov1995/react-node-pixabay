import React from 'react';
import Chip from './Chip';
import VisibleIcon from './Icons/Visible Icon';
import DownloadIcon from './Icons/Download Icon';
import Tooltip from './Tooltip';
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import CollectionIcon from './Icons/Collection Icon';
import LikeIcon from './Icons/Like Icon';
import CommentIcon from './Icons/Comment Icon';

const ImageItem = ({ image }) => {
  const dispatch = useDispatch()

  const handleClickImage = () => {
    dispatch({ type : 'MODAL_STATUS' , payload : image.id })
  }

  return (
      <div className="w-1/3 p-4 flex justify-center">
      <div onClick={handleClickImage} className='rounded-lg border-primary border-solid border-[1px] rounded-lg p-2 group cursor-pointer'>
      <img  src={image.webformatURL} alt={image.id} className="w-[400px] h-[400px] group-hover:scale-90 transition-all object-cover rounded-lg" />
    </div>
    <Modal choose={image.id}>
    <div className="text-sm text-gray-600 h-30 flex flex-wrap justify-center items-center">
        <div className='w-full flex flex-wrap justify-center'>
        <p className='text-[22px] py-3 w-full flex  justify-center'>{image.user}</p>
        <div className={`w-[150px] h-[150px] flex justify-center rounded-full overflow-hidden p-2 border-dashed border-secondary border-[3px] ${!image.userImageURL && 'hidden'}`}>
        <img  src={image.userImageURL} alt={image.id} className="w-full h-full group-hover:scale-90 transition-all object-cover rounded-full" />
        </div>
        </div>
        <div className='w-full flex flex-wrap justify-center py-4'>
        <Tooltip title='Views'>
          <Chip icon={<VisibleIcon type='true'/>} title={image.views}/>
        </Tooltip>
        <Tooltip title='Downloads'>
          <Chip icon={<DownloadIcon/>} title={image.downloads}/>
        </Tooltip>
        <Tooltip title='Collections'>
          <Chip icon={<CollectionIcon/>} title={image.collections}/>
        </Tooltip>
        <Tooltip title='Likes'>
          <Chip icon={<LikeIcon/>} title={image.likes}/>
        </Tooltip>
        <Tooltip title='Comments'>
          <Chip icon={<CommentIcon/>} title={image.comments}/>
        </Tooltip>
        </div>
      </div>
    </Modal>
    </div>
  );
};

export default ImageItem;
