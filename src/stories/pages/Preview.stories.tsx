import {Preview} from "../../pages/Preview";
import {ComponentMeta} from "@storybook/react";
import {StoryContainer} from "./Register.stories";

export default {
    title:"Preview",
    component:Preview,
    decorators:[(Story)=>(<StoryContainer><Story/></StoryContainer>)]
} as ComponentMeta<typeof Preview>


export const Primary = <Preview/>