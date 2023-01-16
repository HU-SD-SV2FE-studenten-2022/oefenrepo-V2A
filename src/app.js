import { Router } from '@vaadin/router';
import DashboardPage from './view/pages/dashboard-page';

function initRouter() {
  const router = new Router(document.querySelector('main')); 

  router.setRoutes([
    { path: '/', component: 'dashboard-page' },
    { path: '/repairform', component: 'repairform-page', action: () => import('./view/pages/repairform-page') },
    { path: '*', component: 'dashboard-page' },
  ]);
}

initRouter();