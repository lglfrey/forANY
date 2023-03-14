import React from 'react';
import InboxPage from '../pages/InboxPage.jsx';
import TasksPage from '../pages/TasksPage.jsx';
import ItemTaskPage from '../pages/ItemTaskPage.jsx';
import UserListPage from '../pages/UserListPage.jsx';
import ReestrPaymentsPage from '../pages/ReestrPaymentsPage.jsx';
import ReestrPaymentItemPage from '../pages/ReestrPaymentItemPage.jsx';

const GreenButtonRoutes = [
  {
    path: '/inbox',
    element: <InboxPage />
  },
  {
    path: '/inbox/tasks/:code/:api',
    element: <TasksPage />
  },
  {
    path: '/inbox/tasks/:code/:api/:id',
    element: <ItemTaskPage />
  },
  {
    path: '/inbox/tasks/:code/:api/user_list/:action',
    element: <UserListPage />
  },
  {
    path: '/inbox/reestr/',
    element: <ReestrPaymentsPage />
  },
  {
    path: '/inbox/reestr/:external_id',
    element: <ReestrPaymentItemPage />
  }
];
export default GreenButtonRoutes;

