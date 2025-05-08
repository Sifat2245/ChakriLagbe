import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage";
import CompanyDetails from "../Pages/CompanyDetails";
import Forget from "../Component/forget password/Forget";

const router = createBrowserRouter([
   {
      path: '/',
      Component: Layout,
      loader: ()=> fetch('/data.json'),
      children:[{
         index:true,
         path: '/',
         Component: HomePage
      }]
   },
   {
      path: '/company_details/:id',
      Component: CompanyDetails,
      loader: ()=> fetch('/data.json')
   },
   {
      path: '/forget_password',
      Component: Forget
   }
])



export default router