using Microsoft.AspNetCore.Identity;

namespace sharp_coders_hackadev.Models;

public class TesteAcesso
{
    public string id { get; set; }
    public string cpf_acesso { get; set; }
    public string senha_acesso { get; set; }
    public int usuarioId { get; set; } // chave estrangeira
    public TesteUsuario TesteUsuario { get; set; } // propriedade de navegação
}
