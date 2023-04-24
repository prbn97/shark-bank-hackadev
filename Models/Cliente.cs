// CREATE TABLE `cliente` (
// 	`Id` varchar(255) NOT NULL,
// 	`NomeCliente` varchar(50) NOT NULL,
// 	`EmailCliente` varchar(50) NOT NULL,
// 	`CelularCliente` varchar(20) NOT NULL,
// 	`AtivoCliente` BOOLEAN NOT NULL DEFAULT true,
// 	PRIMARY KEY (`Id`)
// );

using Microsoft.AspNetCore.Identity;

namespace sharp_coders_hackadev.Models;

public class Cliente
{
    public string Id { get; set; }
    public string ClienteCpf { get; set; }
    public string ClienteNome { get; set; }
    public string ClienteEmail { get; set; }
    public string ClienteCelular { get; set; }
    public bool? ClienteAtivo { get; set; }
}
