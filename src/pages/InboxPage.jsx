import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getCategory, getResstrPayments } from '../api/api';
import InstallButton from '../../common/components/InstallButton.jsx';

import gear from '../assets/images/icons/gearIcon.svg';
import { ReactComponent as Home } from '../assets/images/icons/home.svg';
import Loading from '../components/UI/Loading.jsx';

import ThemeModal from '../components/UI/ThemeModal.jsx';
import { getUserData } from '../../common/lib/handleAuthData';
import { ReactComponent as ArrowLeftIcon } from '../assets/images/icons/arrow-left-icon.svg';

export default function InboxPage() {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [countTasks, setCountTask] = useState(0);
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();
  const showAllCategories = useSelector((state) => state.greenButton.showAllCategories);
  const [reestersCount, setReestersCount] = useState();

  useEffect(() => {
    getCategory()
      .then((resp) => {
        const allCat = !showAllCategories ? resp.data : resp.data.filter((cat) => cat.count > 0);
        let countTasks = 0;
        allCat.map(({ count }) => (countTasks += count));
        setCountTask(countTasks);
        setCategory(allCat);
      })
      .catch((error) => {
        console.info('--getCategory Error', error);
      })
      .finally(() => setLoad(false));

    /* getScenarios()
        .then((resp) => {
          const allScn = resp.data;
          setScn(allScn);
        })
        .catch(() => {})
        .finally(() => setLoad(false)); */

    getResstrPayments({})
      .then((resp) => {
        const allPayments = resp.data;
        setReestersCount(allPayments.length);
      })
      .catch((error) => {
        console.info('--getResstrPayments Error', error);
      })
      .finally(() => setLoad(false));
  }, [showAllCategories]);

  const { hrUserKey } = getUserData();
  return (
    <>
      {load ? <Loading /> : ''}

      <div className="justify-start justify-center-mobile align-center d-flex">
        <InstallButton />
      </div>

      <div className="settings-block flex justify-content-between align-items-center pt-3 pb-4 container position-relative">
        <div className='d-flex justify-center'>
          { 
            hrUserKey && (
            <ArrowLeftIcon 
              onClick={() => navigate('/hr')}
            />
          )}
          <div className="main__nav__title ml-2">ГК ФСК<span>место силы</span></div>
        </div>
        <span onClick={() => dispatch({ type: 'openTheme' })} className="ml-3 cursor-pointer">
          <img alt="Just a gear" src={gear} width="40" height="40" />
        </span>
      </div>
      <ThemeModal />

      <div className="container p-0 auto-overflow hide-scroll-bar">
        <div className='heading_title'>Входящие задачи</div>
        <ul className="main-list font-weight-500 p-0">
          {category
            ? category.map((item, key) => (
                <li data-toggle="collapse" key={key} className="mb-2">
                  <Link
                    to={'/inbox/tasks/' + item.code + '/' + item.api}
                    className="flex space-between align-center px-3 py-4"
                  >
                    {item.name}
                    {item.count ? (
                      <div className="flex justify-center align-center">
                        <span className="count">{item.count}</span>
                        <span className="arrow right-side"></span>
                      </div>
                    ) : (
                      <span className="arrow right-side"></span>
                    )}
                  </Link>
                </li>
              ))
            : ''}

          {!showAllCategories || (showAllCategories && reestersCount > 0) ? (
            <li data-toggle="collapse" className="mb-2">
              <Link to="/inbox/reestr/" className="flex space-between align-center px-3 py-4">
                Реестры платежей
                <div className="flex justify-center align-center">
                  {reestersCount > 0 && <span className="count">{reestersCount}</span>}
                  <span className="arrow right-side"></span>
                </div>
              </Link>
            </li>
          ) : (
            ''
          )}
        </ul>
        {countTasks === 0 && reestersCount === 0 ? (
          <div className="card msg">
            <div className="card-body text-center">У вас пока нет активных заявок</div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
}
