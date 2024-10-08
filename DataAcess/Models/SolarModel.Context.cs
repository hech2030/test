﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Ce code a été généré à partir d'un modèle.
//
//     Des modifications manuelles apportées à ce fichier peuvent conduire à un comportement inattendu de votre application.
//     Les modifications manuelles apportées à ce fichier sont remplacées si le code est régénéré.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DataAcess.Models
{
    using System.Data.Entity;
    using System.Data.Entity.ModelConfiguration.Conventions;

    public partial class SolarThermalEntities : DbContext
    {
        public SolarThermalEntities()
            : base("name=SolarThermalEntities")
        {
            Configuration.LazyLoadingEnabled = false;
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //Removing the 's' when looking for table name
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            modelBuilder.Entity<MAGASIN>()
                         .HasMany<ARTICLE>(g => g.ARTICLE)
                         .WithRequired(s => s.MAGASIN)
                         .HasForeignKey<long>(s => s.MAGASINId);
        }
    
        public virtual DbSet<AGENCE> AGENCE { get; set; }
        public virtual DbSet<ARTICLE> ARTICLE { get; set; }
        public virtual DbSet<CATEGORIE_ART> CATEGORIE_ART { get; set; }
        public virtual DbSet<COMMANDE> COMMANDE { get; set; }
        public virtual DbSet<ENTREE> ENTREE { get; set; }
        public virtual DbSet<FOURNISSEUR> FOURNISSEUR { get; set; }
        public virtual DbSet<LIGNE_COMMANDE> LIGNE_COMMANDE { get; set; }
        public virtual DbSet<MAGASIN> MAGASIN { get; set; }
        public virtual DbSet<RECEPTION> RECEPTION { get; set; }
        public virtual DbSet<SORTIE> SORTIE { get; set; }
        public virtual DbSet<SOUS_TRAITANT> SOUS_TRAITANT { get; set; }
        public virtual DbSet<STOCK> STOCK { get; set; }
        public virtual DbSet<user> user { get; set; }
    }
}
