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
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("ENTREE")]
    public partial class ENTREE
    {
        public long Id { get; set; }
        public Nullable<long> numEntree { get; set; }
        public Nullable<long> quantite { get; set; }
        public Nullable<System.DateTime> dateEntree { get; set; }
        public Nullable<long> prixDentree { get; set; }
        public long ARTICLEId { get; set; }
    
        public virtual ARTICLE ARTICLE { get; set; }
    }
}
