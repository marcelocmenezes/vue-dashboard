// Default template
import Layout from '../components/DashBoard/Layout/Default.vue'

// Childrens
import Suporte from '../components/DashBoard/Views/Suporte.vue'
import Overview from '../components/DashBoard/Views/Overview.vue'
import Clientes from '../components/DashBoard/Views/Clientes.vue'

const children = [
    { path: '', component: Overview },
    { path: 'clientes', component: Clientes },
    { path: 'suporte', component: Suporte }
]

const dashboard = { path: '/admin', component: Layout, meta: { requiresAuth: true }, children: children }
    


export default dashboard
