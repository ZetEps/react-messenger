 import React from "react";
import {Button} from "../../components/primitives/Button";
import {style} from "../../style/style";
import "./../../index.css";

export default {
    title:"Button",
    component:Button
}

 export const Filled = ()=> <div style = {{width:'200px'}}>
     <Button background={style.btn.color.blue} color={"#fff"}>Button</Button>
 </div>
 export const Stroke = ()=> <div style = {{width:'200px'}}>
     <Button background={style.btn.color.transparent} color ={'#000'}>Button</Button>
 </div>
