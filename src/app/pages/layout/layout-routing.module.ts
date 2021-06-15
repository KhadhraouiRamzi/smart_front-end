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
import { TestFormComponent } from './test-mgmnt/test-form/test-form.component';
import { ListFournisseurComponent } from './fournisseur-mgmnt/list-fournisseur/list-fournisseur.component';
import { ListMarketingComponent } from './marketing-mgmnt/list-marketing/list-marketing.component';
import { FormFournisseurComponent } from './fournisseur-mgmnt/form-fournisseur/form-fournisseur.component';
import { DetailFournisseurComponent } from './fournisseur-mgmnt/detail-fournisseur/detail-fournisseur.component';
import { EditFournisseurComponent } from './fournisseur-mgmnt/edit-fournisseur/edit-fournisseur.component';
import { EditMarketingComponent } from './marketing-mgmnt/edit-marketing/edit-marketing.component';
import { DetailMarketingComponent } from './marketing-mgmnt/detail-marketing/detail-marketing.component';
import { FormMarketingComponent } from './marketing-mgmnt/form-marketing/form-marketing.component';
import { ListDeviseComponent } from './devise-mgmnt/list-devise/list-devise.component';
import { EditDeviseComponent } from './devise-mgmnt/edit-devise/edit-devise.component';
import { DetailDeviseComponent } from './devise-mgmnt/detail-devise/detail-devise.component';
import { FormDeviseComponent } from './devise-mgmnt/form-devise/form-devise.component';
import { ListFtpComponent } from './ftp-mgmnt/list-ftp/list-ftp.component';
import { EditFtpComponent } from './ftp-mgmnt/edit-ftp/edit-ftp.component';
import { DetailFtpComponent } from './ftp-mgmnt/detail-ftp/detail-ftp.component';
import { FormFtpComponent } from './ftp-mgmnt/form-ftp/form-ftp.component';
import { ListPlateformeComponent } from './palteforme-mgmnt/list-plateforme/list-plateforme.component';
import { FormPlateformeComponent } from './palteforme-mgmnt/form-plateforme/form-plateforme.component';
import { DetailPlateformeComponent } from './palteforme-mgmnt/detail-plateforme/detail-plateforme.component';
import { EditPlateformeComponent } from './palteforme-mgmnt/edit-plateforme/edit-plateforme.component';
import { ListOperateurComponent } from './operateur-mgmnt/list-operateur/list-operateur.component';
import { FormOperateurComponent } from './operateur-mgmnt/form-operateur/form-operateur.component';
import { DetailOperateurComponent } from './operateur-mgmnt/detail-operateur/detail-operateur.component';
import { EditOperateurComponent } from './operateur-mgmnt/edit-operateur/edit-operateur.component';
import { OrangeDetailsComponent } from './details-mgmnt/orange-details/orange-details.component';
import { DeezerDetailsComponent } from './details-mgmnt/deezer-details/deezer-details.component';
import { BeleiveDetailsComponent } from './details-mgmnt/beleive-details/beleive-details.component';
import { OrangeStatComponent } from './details-mgmnt/orange-details/orange-stat/orange-stat.component';
import { OrangeStatCategoryComponent } from './details-mgmnt/orange-details/orange-stat-category/orange-stat-category.component';
import { OrangeStatChansonComponent } from './details-mgmnt/orange-details/orange-stat-chanson/orange-stat-chanson.component';
import { OrangeStatDateComponent } from './details-mgmnt/orange-details/orange-stat-date/orange-stat-date.component';
import { OrangeStatCountAComponent } from './details-mgmnt/orange-details/orange-stat-count-a/orange-stat-count-a.component';
import { OrangeStatCountCComponent } from './details-mgmnt/orange-details/orange-stat-count-c/orange-stat-count-c.component';
import { OrangeStatPlateformeComponent } from './details-mgmnt/orange-details/orange-stat-plateforme/orange-stat-plateforme.component';
import { ListDetailComponent } from './detail-crud/list-detail/list-detail.component';
import { FormDetailComponent } from './detail-crud/form-detail/form-detail.component';
import { EditDetailComponent } from './detail-crud/edit-detail/edit-detail.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'ngx-form-detail',
      component: FormDetailComponent,
    },
    {
      path: 'ngx-edit-detail',
      component: EditDetailComponent,
    },
    {
      path: 'ngx-list-detail',
      component: ListDetailComponent,
    },
    {
      path: 'orange-stat',
      component: OrangeStatComponent,
    },
    {
      path: 'orange-stat-category',
      component: OrangeStatCategoryComponent,
    },
    {
      path: 'orange-stat-platefrome',
      component: OrangeStatPlateformeComponent,
    },
    {
      path: 'orange-stat-chanson',
      component: OrangeStatChansonComponent,
    },
    {
      path: 'orange-stat-date',
      component: OrangeStatDateComponent,
    },
    {
      path: 'orange-stat-count-artsite',
      component: OrangeStatCountAComponent,
    },
    {
      path: 'orange-stat-count-chanson',
      component: OrangeStatCountCComponent,
    },
    {
      path: 'orange',
      component: OrangeDetailsComponent,
    },
    {
      path: 'deezer',
      component: DeezerDetailsComponent,
    },
    {
      path: 'beleive',
      component: BeleiveDetailsComponent,
    },

    {
      path: 'list-operateur',
      component: ListOperateurComponent,
    },
    {
      path: 'edit-operateur/:id',
      component: EditOperateurComponent,
    },
    {
      path: 'detail-operateur',
      component: DetailOperateurComponent,
    },
    {
      path: 'form-operateur',
      component: FormOperateurComponent,
    }, {
      path: 'list-plateforme',
      component: ListPlateformeComponent,
    },
    {
      path: 'edit-plateforme/:id',
      component: EditPlateformeComponent,
    },
    {
      path: 'detail-plateforme',
      component: DetailPlateformeComponent,
    },
    {
      path: 'form-plateforme',
      component: FormPlateformeComponent,
    },
    {
      path: 'list-ftp',
      component: ListFtpComponent,
    },
    {
      path: 'edit-ftp/:id',
      component: EditFtpComponent,
    },
    {
      path: 'detail-ftp',
      component: DetailFtpComponent,
    },
    {
      path: 'form-ftp',
      component: FormFtpComponent,
    },
    {
      path: 'list-devise',
      component: ListDeviseComponent,
    },
    {
      path: 'edit-devise/:id',
      component: EditDeviseComponent,
    },
    {
      path: 'detail-devise',
      component: DetailDeviseComponent,
    },
    {
      path: 'form-devise',
      component: FormDeviseComponent,
    },
    {
      path: 'list-marketing',
      component: ListMarketingComponent,
    },
    {
      path: 'edit-marketing/:id',
      component: EditMarketingComponent,
    },
    {
      path: 'detail-marketing',
      component: DetailMarketingComponent,
    },
    {
      path: 'form-marketing',
      component: FormMarketingComponent,
    },
    {
      path: 'list-fournisseur',
      component: ListFournisseurComponent,
    },
    {
      path: 'edit-fournisseur/:id',
      component: EditFournisseurComponent,
    },
    {
      path: 'detail-fournisseur',
      component: DetailFournisseurComponent,
    },
    {
      path: 'form-fournisseur',
      component: FormFournisseurComponent,
    },
    {
      path: 'list-album',
      component: ListAlbumComponent,
    },
    {
      path: 'test-form',
      component: TestFormComponent,
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
      path: 'detail-artiste/:id',
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
