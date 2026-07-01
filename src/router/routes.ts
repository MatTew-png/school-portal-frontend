import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/IndexPage.vue') },
      { path: 'about', component: () => import('@/pages/AboutPage.vue') },
      { path: 'news', component: () => import('@/pages/NewsListPage.vue') },
      { path: 'news/:id', component: () => import('@/pages/NewsDetailPage.vue') },
      { path: 'calendar', component: () => import('@/pages/CalendarPage.vue') },
    ],
  },

  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/admin/DashboardPage.vue') },
      { path: 'news', component: () => import('@/pages/admin/NewsManagePage.vue') },
      { path: 'events', component: () => import('@/pages/admin/EventsManagePage.vue') },
      { path: 'staff', component: () => import('@/pages/admin/StaffManagePage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
];

export default routes;
