//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DataAcess
{
    using System;
    using System.Collections.Generic;
    
    public partial class COMMANDE
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public COMMANDE()
        {
            this.LIGNE_COMMANDE = new HashSet<LIGNE_COMMANDE>();
        }
    
        public long Id { get; set; }
        public Nullable<long> numCommande { get; set; }
        public Nullable<System.DateTime> dateCOMMANDE { get; set; }
        public string etat { get; set; }
        public long RECEPTIONId { get; set; }
        public long FOURNISSEURId { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LIGNE_COMMANDE> LIGNE_COMMANDE { get; set; }
        public virtual RECEPTION RECEPTION { get; set; }
        public virtual FOURNISSEUR FOURNISSEUR { get; set; }
    }
}
