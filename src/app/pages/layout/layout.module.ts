import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    NbAccordionModule,
    NbActionsModule, NbAlertModule,
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
import { TestFormComponent } from './test-mgmnt/test-form/test-form.component';
import { TestListComponent } from './test-mgmnt/test-list/test-list.component';
import { FormMarketingComponent } from './marketing-mgmnt/form-marketing/form-marketing.component';
import { EditMarketingComponent } from './marketing-mgmnt/edit-marketing/edit-marketing.component';
import { DetailMarketingComponent } from './marketing-mgmnt/detail-marketing/detail-marketing.component';
import { ListDeviseComponent } from './devise-mgmnt/list-devise/list-devise.component';
import { FormDeviseComponent } from './devise-mgmnt/form-devise/form-devise.component';
import { EditDeviseComponent } from './devise-mgmnt/edit-devise/edit-devise.component';
import { DetailDeviseComponent } from './devise-mgmnt/detail-devise/detail-devise.component';
import { DetailFtpComponent } from './ftp-mgmnt/detail-ftp/detail-ftp.component';
import { EditFtpComponent } from './ftp-mgmnt/edit-ftp/edit-ftp.component';
import { FormFtpComponent } from './ftp-mgmnt/form-ftp/form-ftp.component';
import { ListFtpComponent } from './ftp-mgmnt/list-ftp/list-ftp.component';
import { ListCommunicationComponent } from './communication-mgmnt/list-communication/list-communication.component';
import { FormCommunicationComponent } from './communication-mgmnt/form-communication/form-communication.component';
import { EditCommunicationComponent } from './communication-mgmnt/edit-communication/edit-communication.component';
import { DetailCommunicationComponent } from './communication-mgmnt/detail-communication/detail-communication.component';
import { ListMarketingComponent } from './marketing-mgmnt/list-marketing/list-marketing.component';
import { ListOperateurComponent } from './operateur-mgmnt/list-operateur/list-operateur.component';
import { FormOperateurComponent } from './operateur-mgmnt/form-operateur/form-operateur.component';
import { EditOperateurComponent } from './operateur-mgmnt/edit-operateur/edit-operateur.component';
import { DetailOperateurComponent } from './operateur-mgmnt/detail-operateur/detail-operateur.component';
import { OrangeDetailsComponent } from './details-mgmnt/orange-details/orange-details.component';
import { DeezerDetailsComponent } from './details-mgmnt/deezer-details/deezer-details.component';
import { BeleiveDetailsComponent } from './details-mgmnt/beleive-details/beleive-details.component';
import { OrangeStatComponent } from './details-mgmnt/orange-details/orange-stat/orange-stat.component';
import { OrangeStatChansonComponent } from './details-mgmnt/orange-details/orange-stat-chanson/orange-stat-chanson.component';
import { OrangeStatCategoryComponent } from './details-mgmnt/orange-details/orange-stat-category/orange-stat-category.component';
import { OrangeStatDateComponent } from './details-mgmnt/orange-details/orange-stat-date/orange-stat-date.component';
import { OrangeStatCountAComponent } from './details-mgmnt/orange-details/orange-stat-count-a/orange-stat-count-a.component';
import { OrangeStatCountCComponent } from './details-mgmnt/orange-details/orange-stat-count-c/orange-stat-count-c.component';
import { OrangeStatPlateformeComponent } from './details-mgmnt/orange-details/orange-stat-plateforme/orange-stat-plateforme.component';
import {ButtonModule} from "primeng/button";
import { GeneratePDFComponent } from './details-mgmnt/generate-pdf/generate-pdf.component';
import { ListDetailComponent } from './detail-crud/list-detail/list-detail.component';
import { EditDetailComponent } from './detail-crud/edit-detail/edit-detail.component';
import { FormDetailComponent } from './detail-crud/form-detail/form-detail.component';
import { DetailDetailComponent } from './detail-crud/detail-detail/detail-detail.component';


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
        NbAlertModule,
        ButtonModule,
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
    TestFormComponent,
    TestListComponent,
    ListMarketingComponent,
    FormMarketingComponent,
    EditMarketingComponent,
    DetailMarketingComponent,
    ListDeviseComponent,
    FormDeviseComponent,
    EditDeviseComponent,
    DetailDeviseComponent,
    DetailFtpComponent,
    EditFtpComponent,
    FormFtpComponent,
    ListFtpComponent,
    ListCommunicationComponent,
    FormCommunicationComponent,
    EditCommunicationComponent,
    DetailCommunicationComponent,
    ListOperateurComponent,
    FormOperateurComponent,
    EditOperateurComponent,
    DetailOperateurComponent,
    OrangeDetailsComponent,
    DeezerDetailsComponent,
    BeleiveDetailsComponent,
    OrangeStatComponent,
    OrangeStatChansonComponent,
    OrangeStatCategoryComponent,
    OrangeStatDateComponent,
    OrangeStatCountCComponent,
    OrangeStatCountAComponent,
    OrangeStatPlateformeComponent,
    GeneratePDFComponent,
    ListDetailComponent,
    EditDetailComponent,
    FormDetailComponent,
    DetailDetailComponent,
  ],
  providers: [
    NewsService,
  ],
})
export class LayoutModule { }
