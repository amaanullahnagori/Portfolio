import React from "react";
import ReactDom from "react-dom/client";

import Footer from "./components/footer.jsx";
import Body from"./components/body.jsx";

const Applayout=()=>{
    return <>
          
          
            <Body/>
           
         
    
    </>
}
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<Applayout/>);