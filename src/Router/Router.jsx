import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import CompanyDetails from "../Pages/CompanyDetails";
import Profile from "../Component/PorfilePage/Profile";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../Component/errorpage/ErrorPage";
import Companies from "../Pages/Companies";
import FAQ from "../Pages/FAQ";

const router = createBrowserRouter([
   {
      path: '/',
      Component: Layout,
      loader: () => fetch('/data.json'),
      errorElement: <ErrorPage></ErrorPage>
      
   },
   {
      path: '/company_details/:id',
      Component: CompanyDetails,
      loader: () => fetch('/data.json')
   },
   {
      path: '/companies',
      Component: Companies,
      loader: () => fetch('/data.json')
   },
   
   {
      path: 'my_profile',
      element: <PrivateRouter>
         <Profile></Profile>
      </PrivateRouter>
   }
])



export default router