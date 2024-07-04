import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Body from"./components/body.jsx";

const Applayout=()=>{
    return <>
           <Header/>
           <Body/>
           <Footer/>
    
    </>
}
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<Applayout/>);