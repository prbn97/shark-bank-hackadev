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

    public DbSet<Acesso> Acessos { get; set; }
    public DbSet<Agencia> Agencias { get; set; }
    public DbSet<Cliente> Clientes { get; set; }
    public DbSet<Conta> Contas { get; set; }
    public DbSet<Endereco> Enderecos { get; set; }
    public DbSet<Transacao> Transacoes { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Acesso>()
            .HasOne(a => a.Cliente)
            .WithMany()
            .HasForeignKey(a => a.ClienteId);
        
        modelBuilder.Entity<Endereco>()
            .HasOne(c => c.Cliente)
            .WithMany()
            .HasForeignKey(c => c.ClienteId);
        
        modelBuilder.Entity<Transacao>()
            .HasOne(t => t.Cliente)
            .WithMany()
            .HasForeignKey(t => t.ClienteId);

        modelBuilder.Entity<Conta>()
            .HasOne(c => c.Cliente)
            .WithMany()
            .HasForeignKey(c => c.ClienteId);

        modelBuilder.Entity<Conta>()
            .HasOne(c => c.Agencia)
            .WithMany()
            .HasForeignKey(c => c.AgenciaId);     
    }

}
