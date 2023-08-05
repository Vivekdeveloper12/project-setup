import { lazy } from 'react'

const NotFound = lazy(() => import('../Pages/Common/Page404'))
const Login = lazy(() => import('../Pages/Common/Login'))
const Home = lazy(() => import('../Pages/Common/Home'))



const commonRoutes = [
    { path: '/', exact: true, name: 'Home', element: Home },
    { path: '/login', exact: false, name: 'Login', element: Login },
    { path: '/*', exact: false, name: 'notfound', element: NotFound },
]

export default commonRoutes 