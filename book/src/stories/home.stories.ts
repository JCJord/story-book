// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { HomeComponent } from 'src/app/pages/home/home.component';
// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Pages/Pages',
  component: HomeComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: { },
  decorators:[
    moduleMetadata({
        
      declarations:[HomeComponent]
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<HomeComponent> = (args: HomeComponent) => ({
  props: {
    ...args,
    
  },
  template:`<app-home></app-home>` 
});

export const HomePage = Template.bind({});
HomePage.args = {


};
