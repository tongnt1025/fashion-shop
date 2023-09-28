
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Accessories from "../pages/Accessories";
import Login from "../pages/Login";
const publicRoutes=[
    {path:'/',component: Home},
    {path:'/products',component: Products},
    {path:'/contact',component: Contact},
    {path:'/accessories',component: Accessories },
    {path:'/login',component: Login,layout:null },
]
const privateRoutes=[

]
export {privateRoutes,publicRoutes}