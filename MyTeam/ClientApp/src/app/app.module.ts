import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//Important dont remove
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { sideMenuComponent } from './sid-menu/sid-menu.component';
import { AppFooterComponent } from './footer/app-footer/app-footer.component';
import { ToastrModule } from 'ngx-toastr';



import { AuthComponent } from './auth/auth.component'
import { HomeComponent } from './bo/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminUsersComponent } from './bo/Admin/users/users.component';
import { RoleGuard } from './auth/role-guard.guard';
import { TokenInterceptorService } from './auth/token-interceptor.service';
import { StockComponent } from './bo/Admin/stock/stock.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import 'hammerjs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { UsersDetailsComponent } from './bo/Admin/users/userDetails/users-details.component';
import { ProfileComponent } from './bo/MainUser/profile/profile.component';
import { ArticleComponent } from './bo/Stock/Article/article.component';
import { ArticleDetailsComponent } from './bo/Stock/Article/articleDetails/article-details.component';
import { AgencesComponent } from './bo/Admin/Agences/agences.component';
import { AgenceDetailsComponent } from './bo/Admin/Agences/details/details.component';
import { SousTraitantsComponent } from './bo/Admin/SousTraitants/soustraitants.component';
import { SousTraitantDetailsComponent } from './bo/Admin/SousTraitants/details/details.component';
import { CategorieArtComponent } from './bo/Stock/Categorie_Art/categorie_art.component';
import { categorie_artDetailsComponent } from './bo/Stock/Categorie_Art/categorie_art-details/categorie_art-details.component';
import { FournisseurComponent } from './bo/Stock/Fournisseur/fournisseur.component';
import { FournisseurDetailsComponent } from './bo/Stock/Fournisseur/fournisseur-details/fournisseur-details.component';
import { MagasinComponent } from './bo/Stock/Magasin/magasin.component';
import { MagasinDetailsComponent } from './bo/Stock/Magasin/magasin-details/magasin-details.component';
import { MouvementComponent } from './bo/Stock/Mouvement/mouvement.component';
import { CommandeComponent } from './bo/Stock/Commande/commande.component';
import { NewCommComponent } from './bo/Stock/Commande/new-comm/new-comm.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    sideMenuComponent,
    AppFooterComponent,
    AuthComponent,
    HomeComponent,
    AdminUsersComponent,
    StockComponent,
    UsersDetailsComponent,
    ProfileComponent,
    ArticleComponent,
    ArticleDetailsComponent, AgencesComponent,
    AgenceDetailsComponent,
    SousTraitantsComponent,
    SousTraitantDetailsComponent,
    CategorieArtComponent,
    categorie_artDetailsComponent,
    FournisseurComponent, FournisseurDetailsComponent, MagasinComponent, MagasinDetailsComponent,
    MouvementComponent, CommandeComponent, NewCommComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: AuthComponent, pathMatch: 'full' },
      { path: 'Home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'Users', component: AdminUsersComponent, canActivate: [RoleGuard]},
      { path: 'Stock', component: StockComponent, canActivate: [AuthGuard] },
      { path: 'Users/UsersDetails/:id', component: UsersDetailsComponent, canActivate: [RoleGuard] },
      { path: 'User/MyProfile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'Article', component: ArticleComponent, canActivate: [AuthGuard] },
      { path: 'Article/articleDetails/:id', component: ArticleDetailsComponent, canActivate: [AuthGuard] },
      { path: 'Agence', component: AgencesComponent, canActivate: [AuthGuard] },
      { path: 'Agence/agenceDetails/:id', component: AgenceDetailsComponent, canActivate: [AuthGuard] },
      { path: 'SousTraitant', component: SousTraitantsComponent, canActivate: [AuthGuard] },
      { path: 'SousTraitant/sousTraitantDetails/:id', component: SousTraitantDetailsComponent, canActivate: [AuthGuard] },
      { path: 'Categorie/categorieDetails/:id', component: categorie_artDetailsComponent, canActivate: [AuthGuard] },
      { path: 'Categorie', component: CategorieArtComponent, canActivate: [AuthGuard] },
      { path: 'Fournisseur', component: FournisseurComponent, canActivate: [AuthGuard] },
      { path: 'Fournisseur/fournisseurDetails/:id', component: FournisseurDetailsComponent, canActivate: [AuthGuard] },
      { path: 'Magasin', component: MagasinComponent, canActivate: [AuthGuard] },
      { path: 'Magasin/magasinDetails/:id', component: MagasinDetailsComponent, canActivate: [AuthGuard] },
      { path: 'Mouvement', component: MouvementComponent, canActivate: [AuthGuard] },
      { path: 'Commande', component: CommandeComponent, canActivate: [AuthGuard] },
      { path: 'NewRequest', component: NewCommComponent, canActivate: [AuthGuard] }
    ]),
    //InputsModule,
    BrowserAnimationsModule,
    GridModule,
    ChartsModule,
    InputsModule,
    PDFModule, ExcelModule, DropDownsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
