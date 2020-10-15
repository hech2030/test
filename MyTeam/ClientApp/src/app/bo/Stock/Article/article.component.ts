import { Component, OnInit } from '@angular/core';
import { Article } from '../../../Models/bo/Stock/Article/article';
import { ArticleService } from '../../../Shared/Stock/Article/article.service';
import { MagasinService } from '../../../Shared/Stock/Magasin/magasin.service';
import { Magasin } from '../../../Models/bo/Stock/Magasin/magasin';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { MyToolsService } from '../../../Shared/Tools/my-tools.service';
import { NgForm } from '@angular/forms';



@Component({
  templateUrl: './article.component.html',
  host: { 'class': 'content-wrapper' },
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  root = "Article/articleDetails/";
  articleModel = {
    designation: '',
    unit: '',
    quantite: -1,
    prix: -1,
    newAttr: -1,
    emplacement: '',
    CATEGORIE_ARTId: 1,
    FOURNISSEURId: 1,
    MAGASINId: 1,
    CATEGORIE_ART: null,
    ENTREE: null,
    SORTIE: null,
    LIGNE_COMMANDE: null,
    FOURNISSEUR: null,
    MAGASIN: null
  }
  SearchCriteria = {
    designation: null,
    MAGASINId: -1
  }
  SelectedMagasin: any;
  Isloading: boolean;
  artciles: Article[];
  public artcilesData: Article[];
  Magasins: Magasin[];

  constructor(private articleService: ArticleService, private magasinService: MagasinService, private tools: MyToolsService, private router: Router) { }

  ngOnInit() {
    this.Isloading = true;
    if (this.SelectedMagasin != undefined && this.SelectedMagasin != null) {
      this.SearchCriteria.MAGASINId = this.SelectedMagasin.id;
    }
    this.magasinService.GetMagasin({})
      .subscribe((data: any) => {
        console.log(data.result);
        this.Magasins = data.result;
      });
    this.articleService.GetArticle(this.SearchCriteria)
      .subscribe((data: any) => {
        console.log(data.result);
        this.artciles = data.result;
        this.artcilesData = data.result;
        this.Isloading = false;
      });
  }
  InitSearchCriteria() {
    this.SelectedMagasin = null;
    this.SearchCriteria = {
      designation: null,
      MAGASINId: -1
    }
    this.ngOnInit();
  }

  DeleteArticle(id) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer?',
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Supprimer!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.articleService.DeleteArticle(id)
          .subscribe((data: any) => {
            if (data.success) {
              this.ngOnInit();
              Swal.fire(
                'Supprimé!',
                'Succès',
                'success'
              )
            }
            else {
              Swal.fire(
                'Erreur!',
                'Un problème est survenu avec le serveur.',
                'error'
              )
            }
          });
      }
    })
  }
  AddArticle(Articleform: NgForm) {    
  this.articleService.addArticle(this.articleModel).subscribe(
      (res: any) => {
      if (res.success) {
          this.ngOnInit();
          this.resetModel();
          $("[data-dismiss=modal]").trigger({ type: "click" });
          this.tools.ShowSuccessNotification("Article", "Article Added Successfully", '10000');
        }
        else {
          Swal.fire('Oops...', res.errors[0].description, 'error');
        }
      },
      err => {
        if (err.status == 400) {
          this.tools.ShowErrorNotification("Article", "Something went wrong", '10000');
        }
        else {
          return console.log(err);
        }
      }
    );
  }

  resetModel(){
    
    this.articleModel.designation= '';
    this.articleModel.unit= '';
    this.articleModel.quantite= -1;
    this.articleModel.prix= -1;
    this.articleModel.newAttr= -1;
    this.articleModel.emplacement= '';
    this.articleModel.CATEGORIE_ARTId= -1;
    this.articleModel.FOURNISSEURId= -1;
    this.articleModel.MAGASINId= -1;
    this.articleModel.CATEGORIE_ART= null;
    this.articleModel.ENTREE= null;
    this.articleModel.SORTIE= null;
    this.articleModel.LIGNE_COMMANDE= null;
    this.articleModel.FOURNISSEUR= null;
    this.articleModel.MAGASIN= null
  }

  UpdateArticle(id) {
    this.router.navigate([this.root + id]);
  }
}
