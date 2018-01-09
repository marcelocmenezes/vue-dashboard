//Default Layout
import DashboardLayout from '../components/DashBoard/Layout/Default.vue'

//Login Page
import LoginPage from '../components/GeneralViews/Login.vue'

//404 - Page Not Found
import NotFound from '../components/GeneralViews/PageNotFound.vue'

//Configure Routes
const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin',
    
  },
  
  {
    path: '/admin',
    component: DashboardLayout,
    meta: { requiresAuth: true }
       
  },

  { path: '/auth/login', component: LoginPage },

  { path: '*',  component: NotFound }


]

export default routes