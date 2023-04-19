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
    public int CepEndereco { get; set; }
    public string LogradouroEndereco { get; set; }
    public int NumeroEndereco { get; set; }
    public string ComplementoEndereco { get; set; }
    public string BairroEndereco { get; set; }
    public string EstadoEndereco { get; set; }

    public string ClienteId { get; set; }
    public Cliente Cliente { get; set; }
}
