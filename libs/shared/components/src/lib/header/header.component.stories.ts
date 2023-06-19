import { Meta, moduleMetadata } from '@storybook/angular';
import { SharedMaterialModule } from '@learn-nx/shared/material';
import { HeaderComponent } from './header.component';

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
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
