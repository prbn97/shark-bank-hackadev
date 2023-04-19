// CREATE TABLE `transacao` (
// 	`Id` varchar(255) NOT NULL,
// 	`ClienteId` varchar(255) NOT NULL,
// 	`DataTransacao` DATETIME NOT NULL,
// 	`TipoTransacao` varchar(20) NOT NULL,
// 	`ValorTransacao` DECIMAL(15) NOT NULL,
// 	PRIMARY KEY (`Id`)
// );

using Microsoft.AspNetCore.Identity;

namespace sharp_coders_hackadev.Models;

public class Transacao
{
    public string Id { get; set; }
    public DateTime DataTransacao { get; set; }
    public string TipoTransacao { get; set; }
    public decimal ValorTransacao { get; set; }

    public string ClienteId { get; set; }
    public Cliente Cliente { get; set; }
}
