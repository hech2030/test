//------------------------------------------------------------------------------
// <auto-generated>
//     Ce code a été généré à partir d'un modèle.
//
//     Des modifications manuelles apportées à ce fichier peuvent conduire à un comportement inattendu de votre application.
//     Les modifications manuelles apportées à ce fichier sont remplacées si le code est régénéré.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DataAcess.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class ARTICLE
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ARTICLE()
        {
            this.ENTREE = new HashSet<ENTREE>();
            this.LIGNE_COMMANDE = new HashSet<LIGNE_COMMANDE>();
            this.SORTIE = new HashSet<SORTIE>();
        }
    
        public long Id { get; set; }
        public string designation { get; set; }
        public string unit { get; set; }
        public Nullable<long> quantite { get; set; }
        public Nullable<long> prix { get; set; }
        public Nullable<long> newAttr { get; set; }
        public string emplacement { get; set; }
        public long CATEGORIE_ARTId { get; set; }
        public long MAGASINId { get; set; }
    
        public virtual CATEGORIE_ART CATEGORIE_ART { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ENTREE> ENTREE { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LIGNE_COMMANDE> LIGNE_COMMANDE { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SORTIE> SORTIE { get; set; }
        public virtual MAGASIN MAGASIN { get; set; }
    }
}
