﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DataAcess
{
    using Microsoft.EntityFrameworkCore;
    using System;
    
    public partial class SolarThermalEntities : DbContext
    {
        public SolarThermalEntities(DbContextOptions<SolarThermalEntities> options) : base(options)
        {

        }

        public virtual DbSet<user> user { get; set; }
        public virtual DbSet<STOCK> STOCK { get; set; }
        //public virtual DbSet<C__EFMigrationsHistory> C__EFMigrationsHistory { get; set; }
        public virtual DbSet<ARTICLE> ARTICLE { get; set; }
        public virtual DbSet<CATEGORIE_ART> CATEGORIE_ART { get; set; }
        public virtual DbSet<COMMANDE> COMMANDE { get; set; }
        public virtual DbSet<ENTREE> ENTREE { get; set; }
        public virtual DbSet<FOURNISSEUR> FOURNISSEUR { get; set; }
        public virtual DbSet<LIGNE_COMMANDE> LIGNE_COMMANDE { get; set; }
        public virtual DbSet<MAGASIN> MAGASIN { get; set; }
        public virtual DbSet<RECEPTION> RECEPTION { get; set; }
        public virtual DbSet<SORTIE> SORTIE { get; set; }
    }
}
