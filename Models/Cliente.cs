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
    public string NomeCliente { get; set; }
    public string EmailCliente { get; set; }
    public string CelularCliente { get; set; }
    public bool AtivoCliente { get; set; }
}
