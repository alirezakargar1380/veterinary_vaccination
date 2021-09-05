import React from "react";
import SectionButton from "./BTN/Section_btn";

export default class Header extends React.Component {
   render() {
     return(
         <div className="text-center row">
             <SectionButton href={"/add_employee"} value={"کارمند ها"} class={"mx-4"}/>
             <SectionButton href={"/add_live_stock"} value={"دام دار ها"} class={"mx-4"}/>
             <SectionButton href={"/information_livestock"} value={"اطلاعات واکسیناسیون"} class={"mx-4"}/>
             <SectionButton href={"/lifestock_address"} value={"آدرس مراکز"} class={"mx-4"}/>
             <SectionButton href={"/"} value={"پرینت"} class={"mx-4"}/>
             <SectionButton href={"/vaccines"} value={"واکسن"} class={"mx-4"}/>
         </div>
     )
   }
}