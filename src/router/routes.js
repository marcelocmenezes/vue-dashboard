import Dashboard from './dashboard'

// Importando os components
import LoginPage from '../components/GeneralViews/Login.vue'
import NotFound from '../components/GeneralViews/PageNotFound.vue'


//Configure Routes
const routes = [
  { path: '/', redirect: '/admin' },
  
  { path: '/auth/login', component: LoginPage },
  
  { path: '*',  component: NotFound },
  
  Dashboard  
]

export default routes