import { lazy } from 'react'

const NotFound = lazy(() => import('../Pages/Common/Page404'))
const Login = lazy(() => import('../Pages/Common/Login'))
const Home = lazy(() => import('../Pages/Common/Home'))
const About = lazy(() => import('../Pages/Common/About'))



const commonRoutes = [
    { path: '/home', exact: true, name: 'Home', element: Home },
    { path: '/about', exact: true, name: 'About', element: About },
    { path: '/login', exact: false, name: 'Login', element: Login },
    { path: '/*', exact: false, name: 'notfound', element: NotFound },
]

export default commonRoutes 