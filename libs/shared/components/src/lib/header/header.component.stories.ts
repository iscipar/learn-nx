import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { configure, userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { SharedMaterialModule } from '@learn-nx/shared/material';
import { HeaderComponent } from './header.component';

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  argTypes: { onLogout: { action: 'logout' } },
  decorators: [
    moduleMetadata({
      imports: [SharedMaterialModule],
    }),
  ],
} as Meta<HeaderComponent>;

export const NotSigned = {
  render: (args: HeaderComponent) => ({
    props: args,
  }),
  args: {
    title: 'learn-nx',
    signedIn: false
  },
};

export const Signed = {
  render: (args: HeaderComponent) => ({
    props: args,
  }),
  args: {
    title: 'learn-nx',
    signedIn: true
  },
};

configure({testIdAttribute: 'id'});

type Story = StoryObj<HeaderComponent>;

export const Logout: Story = {
  args: {
    title: 'learn-nx',
    signedIn: true
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByTestId('logout-button');
    await userEvent.click(loginButton);
    await expect(args.onLogout).toHaveBeenCalled();
  },
};