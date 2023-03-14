import React from 'react';
import loader_animation from '../../assets/images/icons/loaderAnimationIcon.svg';
import loading from '../../assets/images/icons/loadingIcon.svg';

export default function Loading({ children }) {
  return (
    <div className="modal fade show" id="LoadingModal" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog m-0">
        <div className="modal-content">
          <div className="modal-body flex align-center justify-center flex-column">
            <div className="loader_animation">
              <img alt="" src={loading} className="loader_bg" />
              <img alt="" src={loader_animation} className="loader_loading" />
            </div>
            <p>{children ? children : 'Загрузка ...'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
