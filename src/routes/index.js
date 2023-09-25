
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Accessories from "../pages/Accessories";
import Login from "../pages/Login";
const publicRoutes=[
    {path:'/',component: Home},
    {path:'/Products',component: Products},
    {path:'/Contact',component: Contact},
    {path:'/Accessories',component: Accessories },
    {path:'/Login',component: Login,layout:null },
]
const privateRoutes=[

]
export {privateRoutes,publicRoutes}