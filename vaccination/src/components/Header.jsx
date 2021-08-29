import React from "react";
import SectionButton from "./BTN/Section_btn";

export default class Header extends React.Component {
   render() {
     return(
         <div className="text-center">
           <SectionButton value={"کارمند ها"} class={"mx-4"}/>
           <SectionButton value={"واکسن ها"} class={"mx-4"}/>
           <SectionButton value={"کارمند ها"} class={"mx-4"}/>
           <SectionButton value={"کارمند ها"} class={"mx-4"}/>
         </div>
     )
   }
}