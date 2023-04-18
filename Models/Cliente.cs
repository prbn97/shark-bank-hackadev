// CREATE TABLE `cliente` (
// `hash_cliente` varchar(255) NOT NULL,
// `nome_cliente` varchar(50) NOT NULL,
// `email_cliente` varchar(50) NOT NULL,
// `celular_cliente` varchar(20) NOT NULL,
// PRIMARY KEY (`hash_cliente`)
// );

namespace sharp_coders_hackadev.Models;

public class Cliente
{
    private string hash_cliente { get; set; }
    private string nome_cliente { get; set; }
    private string email_cliente { get; set; }
    private string celular_cliente { get; set; }
    private Endereco Endereco { get; set; }
    private Conta Conta { get; set; }

}
