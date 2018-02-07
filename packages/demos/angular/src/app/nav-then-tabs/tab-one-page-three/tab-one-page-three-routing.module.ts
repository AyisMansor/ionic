import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabOnePageThree } from './tab-one-page-three';

const routes: Routes = [
  { path: '', component: TabOnePageThree}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabOnePageThreeRoutingModule { }
