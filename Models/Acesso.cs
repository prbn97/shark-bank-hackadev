// CREATE TABLE `acesso` (
// 	`Id` varchar(255) NOT NULL,
// 	`ClienteId` varchar(255) NOT NULL,
// 	`CpfAcesso` varchar(50) NOT NULL,
// 	`SenhaAcesso` varchar(50) NOT NULL,
// 	PRIMARY KEY (`Id`)
// );

using Microsoft.AspNetCore.Identity;

namespace sharp_coders_hackadev.Models;

public class Acesso
{
    public string Id { get; set; }
    public string CpfAcesso { get; set; }
    public string SenhaAcesso { get; set; }

    public string ClienteId { get; set; }
    public Cliente Cliente { get; set; }

}
