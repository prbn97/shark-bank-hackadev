using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Duende.IdentityServer.EntityFramework.Options;
using sharp_coders_hackadev.Models;

namespace sharp_coders_hackadev.Data;

public class SharkBankDbContext : DbContext
{
    public SharkBankDbContext(DbContextOptions<SharkBankDbContext> options)
        : base(options) { }

    public DbSet<TesteAcesso> TesteAcessos { get; set; }
    public DbSet<TesteUsuario> TesteUsuarios { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<TesteAcesso>()
            .HasOne(a => a.TesteUsuario)
            .WithMany()
            .HasForeignKey(a => a.usuarioId);
    }
}
