import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage";

const router = createBrowserRouter([
   {
      path: '/',
      Component: Layout,
      children:[{
         index:true,
         path: '/',
         Component: HomePage
      }]
   }
])



export default router