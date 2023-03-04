import React from "react";
import {Input} from "../../components/primitives/Input";
import "./../../index.css";

export default {
    title:"Input",
    component:Input
}

export const Primary = ()=> <div style={{width:'300px'}}>
    <Input inputType={"password"}/>
</div>