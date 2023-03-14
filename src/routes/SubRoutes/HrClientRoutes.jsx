import React from 'react';
import Main from '../../apps/hr_client/pages/Main/Main';
import NewsLine from '../../apps/hr_client/pages/NewsLine/NewsLine';
import NewsItem from '../../apps/hr_client/pages/NewsLine/NewsItem';
import StaticPages from '../../apps/hr_client/pages/StaticPages/StaticPages';
import StaticPage from '../../apps/hr_client/pages/StaticPages/StaticPage';
import Reference from '../../apps/hr_client/pages/Reference/Reference';
import References from '../../apps/hr_client/pages/Reference/References';
import ReferenceTemplates from '../../apps/hr_client/pages/Reference/Templates';
import Phonebook from '../../apps/hr_client/pages/Phonebook/Phonebook';
import PhonebookUser from '../../apps/hr_client/pages/Phonebook/PhonebookUser';

const HrClientRoutes = [
  {
    path: '/hr',
    element: <Main />
  },
  {
    path: '/hr/newsline',
    element: <NewsLine />
  },
  {
    path: '/hr/news/:newsId',
    element: <NewsItem />
  },
  {
    path: '/hr/static-pages/:categoryId',
    element: <StaticPages />
  },
  {
    path: '/hr/static-pages/:categoryId/page/:pageID',
    element: <StaticPage />
  },
  {
    path: '/hr/references',
    element: <References />
  },
  {
    path: '/hr/references/:categoryID/',
    element: <ReferenceTemplates />
  },
  {
    path: '/hr/references/:categoryID/:referenceID',
    element: <Reference />
  },  
  {
    path: '/hr/phonebook',
    element: <Phonebook />
  },
  {
    path: '/hr/phonebook/:userId',
    element: <PhonebookUser />
  }, 
];
export default HrClientRoutes;
