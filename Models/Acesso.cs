using Microsoft.AspNetCore.Identity;

namespace sharp_coders_hackadev.Models;

public class Acesso
{
    public string id { get; set; }
    public string cpf_acesso { get; set; }
    public string senha_acesso { get; set; }
}
