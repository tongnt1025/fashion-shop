
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Accessories from "../pages/Accessories";
import Login from "../pages/Login";
import Test from "../pages/Test";
import Register from "../pages/Register";
import ProductDesc from "../components/ProductDesc";
const publicRoutes=[
    {path:'/',component: Home},
    {path:'/products',component: Products},
    {path:'/contact',component: Home},
    {path:'/accessories',component: Home},
    {path:'/login',component: Login,layout:null },
    {path:'/test',component: Test,layout:null },
    {path:'/register',component: Register,layout:null },
    {path:'/productdesc',component:ProductDesc},
]
const privateRoutes=[

]
export {privateRoutes,publicRoutes}