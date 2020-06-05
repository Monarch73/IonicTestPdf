import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DocviewerComponent } from './docviewer.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DocviewerComponentRoutingModule } from './docviewer-routing.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: DocviewerComponent }]),
    DocviewerComponentRoutingModule,
  ],
  declarations: [DocviewerComponent]
})
export class DocviewerModule {}
