import { Meta, Story } from "@storybook/react";
import { RecoilRoot } from "recoil";
import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

const Template: Story = () => (
  <RecoilRoot>
    <Header />
  </RecoilRoot>
);

export const Basic = Template.bind({});
