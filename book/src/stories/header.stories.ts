// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta ,} from '@storybook/angular/types-6-0';
import { HeaderComponent } from 'src/app/components/header/header.component';
// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Components/Header',
  component: HeaderComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: { },
  decorators:[
    moduleMetadata({
      imports:[BrowserAnimationsModule],
      declarations:[HeaderComponent]
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: {
    ...args,
    actualState: action('menuState')
  },
  template:`<app-header (menuState)="actualState($event)"></app-header>`
});

export const Default = Template.bind({});
Default.args = {
  state:'open'
};
