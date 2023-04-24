// CREATE TABLE `endereco` (
// 	`Id` varchar(255) NOT NULL,
// 	`ClienteId` varchar(255) NOT NULL,
// 	`CepEndereco` INT(8) NOT NULL,
// 	`LogradouroEndereco` varchar(50) NOT NULL,
// 	`NumeroEndereco` INT(50) NOT NULL,
// 	`ComplementoEndereco` varchar(50) NOT NULL,
// 	`BairroEndereco` varchar(50) NOT NULL,
// 	`EstadoEndereco` varchar(2) NOT NULL,
// 	PRIMARY KEY (`Id`)
// );

using Microsoft.AspNetCore.Identity;

namespace sharp_coders_hackadev.Models;

public class Endereco
{
    public string Id { get; set; }
    public string EnderecoHashCliente { get; set; }
    public Cliente Cliente { get; set; }
    public int EnderecoCep { get; set; }
    public string EnderecoLogradouro { get; set; }
    public int EnderecoNumero { get; set; }
    public string EnderecoComplemento { get; set; }
    public string EnderecoBairro { get; set; }
    public string EnderecoEstado { get; set; }
}
