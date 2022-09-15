import { Meta, Story } from "@storybook/react";
import Button, { Props } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => (
  <Button {...args}>버튼 컴포넌트</Button>
);

export const Basic = Template.bind({});
Basic.args = {
  clickHandler: () => {
    alert("클릭 이벤트 동작");
  },
};

export const Selected = Template.bind({});
Selected.args = {
  ...Basic.args,
  selected: true,
};
