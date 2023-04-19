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

    public DbSet<Notes> Notes { get; set; }
}
