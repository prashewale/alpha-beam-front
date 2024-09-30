import { useEffect, useState } from 'react';
import ModalPopup from '../common/modal-popup';
import './coupon-modal.css';

const CouponModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    // Show the modal on component mount
    openModal();
  }, []);

  return (
    <div>
      <ModalPopup
        isOpen={isModalOpen}
        onClose={closeModal}
        showCloseButton={true}
        className="coupon-modal"
        closeButtonClassName="flex justify-center items-center"
      >
        <div className="row">
          <div className="col-md-6 flex overflow-hidden pr-0">
            <img
              src="img/popup-img.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-md-6 flex items-center justify-center pl-0">
            <div className="text-center">
              <h2 className="mb-4">15% OFF</h2>
              <h6>Just for you!</h6>
              <p>Sign Up and get your first discount now!</p>
              <div className="mb-2">
                <input type="text" placeholder="Mobile Number" />
              </div>
              <div className="mb-2">
                <input type="text" placeholder="Your email" />
              </div>
              <button
                type="button"
                className="btn btn-primary w-[240px] !bg-[#1d8aca]"
              >
                Get My 15%
              </button>
              <p className="mt-4">No thanks, I am not into savings</p>
            </div>
          </div>
        </div>
      </ModalPopup>
    </div>
  );
};

export default CouponModal;
