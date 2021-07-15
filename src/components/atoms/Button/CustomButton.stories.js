import React from "react";

import CustomButton from "./CustomButton";

export default {
	title: "Atoms/Button",
	component: CustomButton,
};

const Template = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: "Button",
	color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: "Button",
	color: "secondary",
};

export const Large = Template.bind({});
Large.args = {
	size: "large",
	label: "Button",
};

export const Small = Template.bind({});
Small.args = {
	size: "small",
	label: "Button",
};
