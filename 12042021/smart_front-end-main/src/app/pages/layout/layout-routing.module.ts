import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { Tab1Component, Tab2Component, TabsComponent } from './tabs/tabs.component';
import { AccordionComponent } from './accordion/accordion.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';
import { ListArtisteComponent } from './artiste-mgmnt/list-artiste/list-artiste.component';
import { EditArtisteComponent } from './artiste-mgmnt/edit-artiste/edit-artiste.component';
import { DetailArtisteComponent } from './artiste-mgmnt/detail-artiste/detail-artiste.component';
import { FormArtisteComponent } from './artiste-mgmnt/form-artiste/form-artiste.component';
import { ListChansonComponent } from './chanson-mgmnt/list-chanson/list-chanson.component';
import { EditChansonComponent } from './chanson-mgmnt/edit-chanson/edit-chanson.component';
import { DetailChansonComponent } from './chanson-mgmnt/detail-chanson/detail-chanson.component';
import { FormChansonComponent } from './chanson-mgmnt/form-chanson/form-chanson.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ListAlbumComponent } from './album-mgmnt/list-album/list-album.component';
import { FormAlbumComponent } from './album-mgmnt/form-album/form-album.component';
import { EditAlbumComponent } from './album-mgmnt/edit-album/edit-album.component';
import { DetailAlbumComponent } from './album-mgmnt/detail-album/detail-album.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'list-album',
      component: ListAlbumComponent,
    },
    {      
      path: 'edit-album/:id',
      component: EditAlbumComponent,
    },
    {
      path: 'detail-album',
      component: DetailAlbumComponent,
    },
    {
      path: 'form-album',
      component: FormAlbumComponent,
    },
    {
      path: 'image',
      component: ImageUploadComponent,
    },
    {
      path: 'list-artiste',
      component: ListArtisteComponent,
    },
    {
      path: 'edit-artiste/:id',
      component: EditArtisteComponent,
    },
    {
      path: 'detail-artiste',
      component: DetailArtisteComponent,
    },
    {
      path: 'form-artiste',
      component: FormArtisteComponent,
    },
    {
      path: 'list-chanson',
      component: ListChansonComponent,
    },
    {
      path: 'edit-chanson/:id',
      component: EditChansonComponent,
    },
    {
      path: 'detail-chanson',
      component: DetailChansonComponent,
    },
    {
      path: 'form-chanson',
      component: FormChansonComponent,
    },
   {
      path: 'stepper',
      component: StepperComponent,
    },
    {
      path: 'list',
      component: ListComponent,
    },
    {
      path: 'infinite-list',
      component: InfiniteListComponent,
    },
    {
      path: 'accordion',
      component: AccordionComponent,
    },
    {
      path: 'tabs',
      component: TabsComponent,
      children: [
        {
          path: '',
          redirectTo: 'tab1',
          pathMatch: 'full',
        },
        {
          path: 'tab1',
          component: Tab1Component,
        },
        {
          path: 'tab2',
          component: Tab2Component,
        },
      ],
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
