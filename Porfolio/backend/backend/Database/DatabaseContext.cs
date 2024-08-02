using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Database;

public partial class DatabaseContext : DbContext
{
    public DatabaseContext()
    {
    }

    public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
    {
    }

    public virtual DbSet<TbPortfolio> TbPortfolios { get; set; }

    public virtual DbSet<TbUser> TbUsers { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=localhost,1433;user id=sa; password=Mflv[Mflv[; Database=MyPortfolioDB; TrustServerCertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<TbPortfolio>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__TbPortfo__3213E83F7433D964");

            entity.ToTable("TbPortfolio");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Dislike).HasComment("");
            entity.Property(e => e.Head)
                .HasMaxLength(50)
                .HasColumnName("head");
            entity.Property(e => e.Img)
                .HasMaxLength(200)
                .HasDefaultValueSql("(NULL)")
                .HasComment("")
                .HasColumnName("img");
            entity.Property(e => e.IsDelete).HasColumnName("isDelete");
            entity.Property(e => e.Like).HasComment("");
            entity.Property(e => e.Subtitle)
                .HasMaxLength(250)
                .HasColumnName("subtitle");
            entity.Property(e => e.Title)
                .HasMaxLength(250)
                .HasColumnName("title");
        });

        modelBuilder.Entity<TbUser>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__TbUser__3214EC270643BF19");

            entity.ToTable("TbUser");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Username).HasMaxLength(450);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
