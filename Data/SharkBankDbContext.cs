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
    
        var usuario = modelBuilder.Entity<Cliente>();
        usuario.ToTable("clientes");
        usuario.HasKey(cliente => cliente.Id);
        usuario.Property(cliente => cliente.Id).HasColumnName("cliente_hash").HasMaxLength(255).IsRequired();
        usuario.Property(cliente => cliente.ClienteNome).HasColumnName("cliente_nome").HasMaxLength(50).IsRequired();
        usuario.Property(cliente => cliente.ClienteCpf).HasColumnName("cliente_cpf").HasMaxLength(11).IsRequired();
        usuario.Property(cliente => cliente.ClienteEmail).HasColumnName("cliente_email").HasMaxLength(50).IsRequired();
        usuario.Property(cliente => cliente.ClienteCelular).HasColumnName("cliente_celular").HasMaxLength(20).IsRequired();
        usuario.Property(cliente => cliente.ClienteAtivo).HasColumnName("cliente_ativo").IsRequired().HasDefaultValue(true);

        var acesso = modelBuilder.Entity<Acesso>();
        acesso.ToTable("acessos");
        acesso.HasKey(acesso => acesso.Id);
        acesso.Property(acesso => acesso.Id).HasColumnName("acesso_hash").HasMaxLength(255).IsRequired();
        acesso.Property(acesso => acesso.AcessoHashCliente).HasColumnName("acesso_hash_cliente").HasMaxLength(255).IsRequired();
        acesso.HasOne(acesso => acesso.Cliente).WithMany().HasForeignKey(acesso => acesso.AcessoHashCliente);

        var endereco = modelBuilder.Entity<Endereco>();
        endereco.ToTable("enderecos");
        endereco.HasKey(endereco => endereco.Id);
        endereco.Property(endereco => endereco.Id).HasColumnName("endereco_hash").HasMaxLength(255).IsRequired();
        endereco.Property(endereco => endereco.EnderecoHashCliente).HasColumnName("endereco_hash_cliente").HasMaxLength(255).IsRequired();
        endereco.Property(endereco => endereco.EnderecoCep).HasColumnName("endereco_cep").IsRequired();
        endereco.Property(endereco => endereco.EnderecoLogradouro).HasColumnName("endereco_logradouro").HasMaxLength(50).IsRequired();
        endereco.Property(endereco => endereco.EnderecoNumero).HasColumnName("endereco_numero").IsRequired();
        endereco.Property(endereco => endereco.EnderecoComplemento).HasColumnName("endereco_complemento").HasMaxLength(50).IsRequired();
        endereco.Property(endereco => endereco.EnderecoBairro).HasColumnName("endereco_bairro").HasMaxLength(50).IsRequired();
        endereco.Property(endereco => endereco.EnderecoEstado).HasColumnName("endereco_estado").HasMaxLength(2).IsRequired();
        endereco.HasOne(endereco => endereco.Cliente).WithMany().HasForeignKey(endereco => endereco.EnderecoHashCliente);

        var conta = modelBuilder.Entity<Conta>();
        conta.ToTable("contas");
        conta.HasKey(conta => conta.Id);
        conta.Property(conta => conta.Id).HasColumnName("conta_hash").HasMaxLength(255).IsRequired();
        conta.Property(conta => conta.ContaHashCliente).HasColumnName("conta_hash_cliente").HasMaxLength(255).IsRequired();
        conta.Property(conta => conta.ContaIdAgencia).HasColumnName("conta_id_agencia").HasMaxLength(255).IsRequired();
        conta.Property(conta => conta.ContaTipo).HasColumnName("conta_tipo").HasMaxLength(50).IsRequired();
        conta.Property(conta => conta.ContaSaldo).HasColumnName("conta_saldo").HasColumnType("decimal(15)").IsRequired();
        conta.HasOne(conta => conta.Cliente).WithMany().HasForeignKey(cliente => cliente.ContaHashCliente);
        conta.HasOne(conta => conta.Agencia).WithMany().HasForeignKey(conta => conta.ContaIdAgencia);

        var agencia = modelBuilder.Entity<Agencia>();
        agencia.ToTable("agencias");
        agencia.HasKey(agencia => agencia.Id);
        agencia.Property(agencia => agencia.Id).HasColumnName("agencia_id").ValueGeneratedOnAdd().IsRequired();
        agencia.Property(agencia => agencia.AgenciaNome).HasColumnName("agencia_nome").HasMaxLength(50).IsRequired();

        var transacao = modelBuilder.Entity<Transacao>();
        transacao.ToTable("transacoes");
        transacao.HasKey(transacao => transacao.Id);
        transacao.Property(transacao => transacao.Id).HasColumnName("transacao_hash").HasMaxLength(255).IsRequired();
        transacao.Property(transacao => transacao.TransacaoHashCliente).HasColumnName("transacao_hash_cliente").HasMaxLength(255).IsRequired();
        transacao.Property(transacao => transacao.TransacaoOrigem).HasColumnName("transacao_origem").HasMaxLength(255).IsRequired();
        transacao.Property(transacao => transacao.TransacaoData).HasColumnName("transacao_data").HasColumnType("datetime").IsRequired();
        transacao.Property(transacao => transacao.TransacaoTipo).HasColumnName("transacao_tipo").HasMaxLength(20).IsRequired();
        transacao.Property(transacao => transacao.TransacaoValor).HasColumnName("transacao_valor").HasColumnType("decimal (15)").IsRequired();
        transacao.HasOne(transacao => transacao.Cliente).WithMany().HasForeignKey(transacao => transacao.TransacaoHashCliente);
    }

    // public DbSet<sharp_coders_hackadev.Models.TesteAcesso> TesteAcesso { get; set; }
    // public DbSet<sharp_coders_hackadev.Models.TesteUsuario> TesteUsuario { get; set; }
}
