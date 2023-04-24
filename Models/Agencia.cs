// CREATE TABLE `agencia` (
// 	`Id` varchar(255) NOT NULL,
// 	`NomeAgencia` varchar(50) NOT NULL,
// 	PRIMARY KEY (`Id`)
// );

using Microsoft.AspNetCore.Identity;

namespace sharp_coders_hackadev.Models;

public class Agencia
{
    public int Id { get; set; }
    public string AgenciaNome { get; set; }
}
