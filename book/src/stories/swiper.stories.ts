// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { action } from '@storybook/addon-actions'
import { SwiperComponent } from 'src/app/components/swiper/swiper.component';
import { DogServiceService } from 'src/app/services/dog-service.service';
// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Components/Swiper',
  component: SwiperComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: { },
  decorators:[
    moduleMetadata({
      imports:[],
      declarations:[SwiperComponent],
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

export const Slider = Template.bind({});
Slider.args = {
    breeds:[
    'https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg',
    'https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg',
    'https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg'],
};