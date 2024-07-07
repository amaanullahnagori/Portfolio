import React from "react";
import ReactDom from "react-dom/client";
import Footer from "./components/footer.jsx";
import Body from"./components/body.jsx";
import About from"./components/about.jsx"
import Contact from "../Portfolio/components/contact.jsx"
import Projects from"./components/project.jsx"
import Error from"./components/error.jsx"
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Applayout=()=>{
    return <>
           <Body/>
           <Footer/>
    
    </>
}
const appRout=createBrowserRouter([{
    path: "/",
    element:<Applayout/>,
    errorElement:<Error/>
},
 {  path: "/about",
    element:<About/>,
 },
 {  path: "/projects",
    element:<Projects/>,
 }
 ,{
    path:"/contact",
    element:<Contact/>
 }

]);
const root=ReactDom.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRout}/>);