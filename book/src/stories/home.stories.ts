// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PrimaryButtonComponent } from 'src/app/components/primary-button/primary-button.component';
import { SwiperComponent } from 'src/app/components/swiper/swiper.component';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { DogServiceService } from 'src/app/services/dog-service.service';
import { SwiperModule } from 'swiper/angular';
// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Pages/Pages',
  component: HomeComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: { },
  decorators:[
    moduleMetadata({
      imports:[SwiperModule,BrowserAnimationsModule],
      declarations:[HomeComponent,SwiperComponent,PrimaryButtonComponent,HeaderComponent],
      providers:[DogServiceService,HttpClient,HttpHandler]
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
  details:0,
    breeds:['https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg','https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg','https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg']
};
