import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage";
import CompanyDetails from "../Pages/CompanyDetails";

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
   }
])



export default router