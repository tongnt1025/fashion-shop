
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Accessories from "../pages/Accessories";
import Login from "../pages/Login";
import Register from "../pages/Register";
const publicRoutes=[
    {path:'/',component: Home},
    {path:'/products',component: Products},
    {path:'/contact',component: Home},
    {path:'/accessories',component: Home},
    {path:'/login',component: Login,layout:null },
    {path:'/register',component: Register,layout:null },
]
const privateRoutes=[

]
export {privateRoutes,publicRoutes}