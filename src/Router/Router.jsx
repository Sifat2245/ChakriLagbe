import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage";
import CompanyDetails from "../Pages/CompanyDetails";
import Profile from "../Component/PorfilePage/Profile";

const router = createBrowserRouter([
   {
      path: '/',
      Component: Layout,
      loader: () => fetch('/data.json'),
      children: [{
         index: true,
         path: '/',
         Component: HomePage
      }]
   },
   {
      path: '/company_details/:id',
      Component: CompanyDetails,
      loader: () => fetch('/data.json')
   },
   {
      path: 'my_profile',
      Component: Profile
   }
])



export default router