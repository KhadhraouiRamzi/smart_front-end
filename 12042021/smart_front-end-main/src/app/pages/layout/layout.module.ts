import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbRadioModule,
  NbRouteTabsetModule,
  NbSelectModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { Tab1Component, Tab2Component, TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ListComponent } from './list/list.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { NewsPostComponent } from './infinite-list/news-post/news-post.component';
import { NewsPostPlaceholderComponent } from './infinite-list/news-post-placeholder/news-post-placeholder.component';
import { AccordionComponent } from './accordion/accordion.component';
import { NewsService } from './news.service';
import { ListArtisteComponent } from './artiste-mgmnt/list-artiste/list-artiste.component';
import { FormArtisteComponent } from './artiste-mgmnt/form-artiste/form-artiste.component';
import { EditArtisteComponent } from './artiste-mgmnt/edit-artiste/edit-artiste.component';
import { DetailArtisteComponent } from './artiste-mgmnt/detail-artiste/detail-artiste.component';
import { DetailChansonComponent } from './chanson-mgmnt/detail-chanson/detail-chanson.component';
import { EditChansonComponent } from './chanson-mgmnt/edit-chanson/edit-chanson.component';
import { FormChansonComponent } from './chanson-mgmnt/form-chanson/form-chanson.component';
import { ListChansonComponent } from './chanson-mgmnt/list-chanson/list-chanson.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ListPlateformeComponent } from './palteforme-mgmnt/list-plateforme/list-plateforme.component';
import { DetailPlateformeComponent } from './palteforme-mgmnt/detail-plateforme/detail-plateforme.component';
import { FormPlateformeComponent } from './palteforme-mgmnt/form-plateforme/form-plateforme.component';
import { EditPlateformeComponent } from './palteforme-mgmnt/edit-plateforme/edit-plateforme.component';
import { EditAlbumComponent } from './album-mgmnt/edit-album/edit-album.component';
import { ListAlbumComponent } from './album-mgmnt/list-album/list-album.component';
import { FormAlbumComponent } from './album-mgmnt/form-album/form-album.component';
import { DetailAlbumComponent } from './album-mgmnt/detail-album/detail-album.component';
import { DetailFournisseurComponent } from './fournisseur-mgmnt/detail-fournisseur/detail-fournisseur.component';
import { ListFournisseurComponent } from './fournisseur-mgmnt/list-fournisseur/list-fournisseur.component';
import { EditFournisseurComponent } from './fournisseur-mgmnt/edit-fournisseur/edit-fournisseur.component';
import { FormFournisseurComponent } from './fournisseur-mgmnt/form-fournisseur/form-fournisseur.component';
import { DialogModule } from 'primeng/dialog';
import { DataTablesModule } from 'angular-datatables';
import { FormsRoutingModule } from '../forms/forms-routing.module';

@NgModule({
  imports: [
    DataTablesModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    LayoutRoutingModule,
    Ng2SmartTableModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    FormsModule,
  ],
  declarations: [
    LayoutComponent,
    TabsComponent,
    Tab1Component,
    Tab2Component,
    StepperComponent,
    ListComponent,
    NewsPostPlaceholderComponent,
    InfiniteListComponent,
    NewsPostComponent,
    AccordionComponent,
    ListArtisteComponent,
    FormArtisteComponent,
    EditArtisteComponent,
    DetailArtisteComponent,
    DetailChansonComponent,
    EditChansonComponent,
    FormChansonComponent,
    ListChansonComponent,
    ImageUploadComponent,
    ListPlateformeComponent,
    DetailPlateformeComponent,
    FormPlateformeComponent,
    EditPlateformeComponent,
    EditAlbumComponent,
    ListAlbumComponent,
    FormAlbumComponent,
    DetailAlbumComponent,
    DetailFournisseurComponent,
    ListFournisseurComponent,
    EditFournisseurComponent,
    FormFournisseurComponent,
  ],
  providers: [
    NewsService,
  ],
})
export class LayoutModule { }
