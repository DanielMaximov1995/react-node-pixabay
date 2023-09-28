import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Modal from './Modal';
import Chip from './Chip';
import ReloadIcon from './Icons/Reload Icon';

const CategorySelector = () => {
  const categories = useSelector((state) => state.categories);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Toggle modal visibility
  const handleModalStatus = () => {
    dispatch({ type : 'MODAL_STATUS' , payload : 'categories' })
  }

  // Choose a category and update the URL
  const ChooseCategory = (category) => {
    navigate(`?page=1&query=${category}`)
    handleModalStatus()
  };

  return (
    <>
    <div className="flex gap-x-2">
      <button onClick={() => navigate(`/`)} className="bg-secondary text-white rounded-full text-[20px] p-3">
        <ReloadIcon />
      </button>
      <button
        onClick={handleModalStatus}
        className="bg-primary hover:bg-primary/70 transition-all duration-300 px-3 py-1 text-[20px]"
      >
        Choose Category
      </button>
    </div>
    <Modal choose={'categories'}>
      <div className="w-[600px] px-10">
        <div className="flex flex-wrap">
          {categories.map((category) => (
            <div key={category} className="p-2 max-w-max">
              <Chip onClick={() => ChooseCategory(category)} className="cursor-pointer capitalize" title={category} />
            </div>
          ))}
        </div>
      </div>
    </Modal>
  </>
  );
};

export default CategorySelector;
