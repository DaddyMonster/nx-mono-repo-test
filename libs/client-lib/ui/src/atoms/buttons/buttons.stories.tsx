import React from 'react';
import Button, { ButtonsProps } from './buttons';

export default {
  title: 'button-test',
  component: Button,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args: ButtonsProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'outlined',
};
