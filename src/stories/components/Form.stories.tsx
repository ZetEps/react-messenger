import React from "react"
import {Form} from "../../components/Form";
import {ComponentMeta} from "@storybook/react";
import "./../../index.css";


export default {
    title:"Form",
    component:Form,
} as ComponentMeta<typeof Form>

export const Primary = ()=> (
    <Form onSubmit={()=>{}}>
        Form
    </Form>
)
