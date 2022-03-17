import { moduleMetadata, storiesOf } from '@storybook/angular';
import { PrimaryButtonComponent } from 'src/app/components/primary-button/primary-button.component';


storiesOf('Button Component',module).addDecorator(moduleMetadata({
    imports:[],
    declarations:[PrimaryButtonComponent],
    providers:[]
}))
.add('default',()=>{
    return{
        template:`<app-primary-button [label]="'Hello World'" [color]="'#ffff'"></app-primary-button>`,
        props: {

        }
    }
})

// .add('Default', ()=>({
    
//     props:{

//     }
// })

// )