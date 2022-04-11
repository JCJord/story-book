// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { PrimaryButtonComponent } from 'src/app/components/primary-button/primary-button.component';

import { SwiperComponent } from 'src/app/components/swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Components/Swiper',
  component: SwiperComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: { },
  decorators:[
    moduleMetadata({
      imports:[SwiperModule, BrowserAnimationsModule],
      declarations:[SwiperComponent,PrimaryButtonComponent],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SwiperComponent> = (args: SwiperComponent) => ({
  props: {
    ...args,
   
  },
  template:`<app-swiper [breeds]="breeds"></app-swiper>` 
});
let breeds:any = ['https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg','https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg','https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg','https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg']
export const Slider = Template.bind({});
Slider.args = {
    breeds: breeds
};