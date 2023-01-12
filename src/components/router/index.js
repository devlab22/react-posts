import About from "../pages/About";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Posts from "../pages/Posts";
import Login from "../pages/Login";


export const privateRoutes = [
    {path: '/posts', component: <Posts/>, exact: true}, 
    {path: '/posts/:id', component: <Post/>, exact: true},
]

export const publicRoutes = [
    {path: '/about', component: <About/>, exact: true},
    {path: '/', component: <Home/>, exact: true},
    {path: '*', component: <Error message="Page not found"/>, exact: true},
    {path: '/login', component: <Login />, exact: true},
]