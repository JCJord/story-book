// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { PrimaryButtonComponent } from 'src/app/components/primary-button/primary-button.component';
import { action } from '@storybook/addon-actions'
// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: PrimaryButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: { },
  decorators:[
    moduleMetadata({
      declarations:[PrimaryButtonComponent]
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<PrimaryButtonComponent> = (args: PrimaryButtonComponent) => ({
  props: {
    ...args,
    onViewDetails:{ onViewDetails: action('onViewDetails')}
  },
  template:`<app-primary-button [label]="label" [color]="'#ffff'" (onViewDetails)="onViewDetails($event)"></app-primary-button>` 
});

export const Default = Template.bind({});
Default.args = {
  color:'#fff',
  label: 'Default Button',
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  label: 'Button',
};
