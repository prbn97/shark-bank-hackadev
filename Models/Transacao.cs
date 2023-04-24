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
    public string TransacaoHashCliente { get; set; }
    public Cliente Cliente { get; set; }
    public DateTime TransacaoData { get; set; }
    public string TransacaoOrigem { get; set; }
    public string TransacaoTipo { get; set; }
    public decimal TransacaoValor { get; set; }
}
