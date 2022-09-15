import { Meta, Story } from "@storybook/react";
import { RecoilRoot } from "recoil";
import Filter from "./Filter";

export default {
  title: "Components/Filter",
  component: Filter,
} as Meta;

const Template: Story = () => (
  <RecoilRoot>
    <Filter />
  </RecoilRoot>
);

export const Basic = Template.bind({});
