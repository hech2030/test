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
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("FOURNISSEUR")]
    public partial class FOURNISSEUR
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public FOURNISSEUR()
        {
            this.ARTICLE = new HashSet<ARTICLE>();
            this.COMMANDE = new HashSet<COMMANDE>();
        }
    
        public long Id { get; set; }
        public long numF { get; set; }
        public string NomF { get; set; }
        public string adresse { get; set; }
        public Nullable<int> codP { get; set; }
        public string ville { get; set; }
        public string payes { get; set; }
        public Nullable<long> tele { get; set; }
        public Nullable<long> fax { get; set; }
        public string email { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ARTICLE> ARTICLE { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<COMMANDE> COMMANDE { get; set; }
    }
}
