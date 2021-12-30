import Login from './pages/login'
import Home from './pages/home'

interface IRoute {
  path: string
  name: string
  exact: boolean
  component: unknown
  props?: unknown
}

const routes: IRoute[] = [
  {
    path: '/user/:title',
    name: 'Login',
    exact: true,
    component: Login,
  },
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: Home,
  },
]

export default routes
