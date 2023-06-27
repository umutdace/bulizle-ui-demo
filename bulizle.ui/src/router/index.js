import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import VerifiedMailView from '../views/VerifiedMailView.vue'
import ErrorPage from '../views/ErrorPageView.vue'
import ChangePassword from '../views/ChangePasswordView.vue'
import ProfileView from '../views/ProfileView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'
import News from '../views/NewsView.vue'
import Admin from '../views/AdminControlView.vue'
import AdminNews from '../views/AdminNews/AdminNewsView.vue'
import AdminNewsAdd from '../views/AdminNews/AdminNewsAdd.vue'
import AdminNewsUpdate from '../views/AdminNews/AdminNewsUpdate.vue'
import AdminPlatforms from '../views/AdminPlatforms/AdminPlatformsView.vue'
import AdminPlatformsAdd from '../views/AdminPlatforms/AdminPlatformsAdd.vue'
import AdminPlatformsUpdate from '../views/AdminPlatforms/AdminPlatformsUpdate'
import AdminCategories from '../views/AdminCategories/AdminCategoriesView.vue'
import AdminCategoriesAdd from '../views/AdminCategories/AdminCategoriesAdd.vue'
import AdminCategoriesUpdate from '../views/AdminCategories/AdminCategoriesUpdate.vue'
import AdminContents from '../views/AdminContents/AdminContentsView.vue'
import AdminContentsAdd from '../views/AdminContents/AdminContentsAdd.vue'
import AdminContentsUpdate from '../views/AdminContents/AdminContentsUpdate.vue'
import Moviespage from '../views/MoviesView.vue'
import Seriespage from '../views/SeriesView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movies',
    name: 'movies',
    component: Moviespage
  },
  {
    path: '/series',
    name: 'series',
    component: Seriespage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/forgotpassword',
    name: 'forgotpassword',
    component: ForgotPasswordView
  },
  {
    path: '/verifiedmail',
    name: 'verifiedmail',
    component: VerifiedMailView
  },
  {
    path: '/errorpage',
    name: 'errorpage',
    component: ErrorPage
  },
  {
    path: '/changepassword',
    name: 'changepassword',
    component: ChangePassword
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/resetpassword',
    name: 'resetpassword',
    component: ResetPasswordView
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/admin/news',
    name: 'adminnews',
    component: AdminNews
  },
  {
    path: '/admin/news/update',
    name: 'newsupdate',
    component: AdminNewsUpdate
  },
  {
    path: '/admin/news/add',
    name: 'newsadd',
    component: AdminNewsAdd
  },
  {
    path: '/admin/contents',
    name: 'admincontents',
    component: AdminContents
  },
  {
    path: '/admin/contents/update',
    name: 'contentsupdate',
    component: AdminContentsUpdate
  },
  {
    path: '/admin/contents/add',
    name: 'contentsadd',
    component: AdminContentsAdd
  },
  {
    path: '/admin/categories',
    name: 'admincategories',
    component: AdminCategories
  },
  {
    path: '/admin/categories/add',
    name: 'categoriesadd',
    component: AdminCategoriesAdd
  },
  {
    path: '/admin/categories/update',
    name: 'categoriesupdate',
    component: AdminCategoriesUpdate
  },
  {
    path: '/admin/platforms',
    name: 'adminplatforms',
    component: AdminPlatforms
  },
  {
    path: '/admin/platforms/add',
    name: 'platformsadd',
    component: AdminPlatformsAdd
  },
  {
    path: '/admin/platforms/update',
    name: 'platformsupdate',
    component: AdminPlatformsUpdate
  },

]
  
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
