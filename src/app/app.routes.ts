import { Routes } from '@angular/router';
import { StructuralDirectiveComponent } from './components/directives/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse.component';
import { ForComponent } from './components/controlFlow/for/for.component';
import { SwitchComponent } from './components/controlFlow/switch/switch.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { HomeComponent } from './components/home/home.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { ApiIntegrationComponent } from './components/api-integration/api-integration.component';

export const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'data-binding',
    component:DataBindingComponent
  },
  {
    path:'structural-directive',
    component: StructuralDirectiveComponent
  },
  {
    path:'attribute-directive',
    component:AttributeDirectiveComponent
  },
  {
    path:'if-else',
    component: IfelseComponent
  }
  ,
  {
    path:'for',
    component: ForComponent
  }
  ,
  {
    path:'switch-case',
    component: SwitchComponent
  },
  {
    path:'pipe',
    component:PipeComponent
  },
  {
    path:'template',
    component:TemplateComponent
  },
  {
    path:'reactive',
    component:ReactiveComponent
  },
  {
    path:'api_integration',
    component:ApiIntegrationComponent
  }
];
