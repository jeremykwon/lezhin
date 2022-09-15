import { Meta, Story } from "@storybook/react";
import { RecoilRoot } from "recoil";
import Loading, { Props } from "./Loading";

export default {
  title: "Components/Loading",
  component: Loading,
} as Meta;

const Template: Story<Props> = (args) => (
  <RecoilRoot>
    <Loading {...args} />
  </RecoilRoot>
);

export const Basic = Template.bind({});
Basic.args = {
  type: "balls",
};

export const Bar = Template.bind({});
Basic.args = {
  ...Basic.args,
  type: "bars",
};

export const Bubble = Template.bind({});
Bubble.args = {
  ...Basic.args,
  type: "bubbles",
};

export const Cube = Template.bind({});
Cube.args = {
  ...Basic.args,
  type: "cubes",
};

export const Cylon = Template.bind({});
Cylon.args = {
  ...Basic.args,
  type: "cylon",
};

export const Spin = Template.bind({});
Spin.args = {
  ...Basic.args,
  type: "spin",
};

export const SpinningBubble = Template.bind({});
SpinningBubble.args = {
  ...Basic.args,
  type: "spinningBubbles",
};

export const Spoke = Template.bind({});
Spoke.args = {
  ...Basic.args,
  type: "spokes",
};
