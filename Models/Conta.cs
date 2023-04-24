// CREATE TABLE `conta` (
// 	`Id` varchar(255) NOT NULL,
// 	`ClienteId` varchar(255) NOT NULL,
// 	`AgenciaId` varchar(255) NOT NULL,
// 	`TipoConta` varchar(50) NOT NULL,
// 	`SaldoConta` DECIMAL(15) NOT NULL,
// 	PRIMARY KEY (`Id`)
// );

using Microsoft.AspNetCore.Identity;

namespace sharp_coders_hackadev.Models;

public class Conta
{
    public string Id { get; set; }
    public string ContaHashCliente { get; set; }
    public Cliente Cliente { get; set; }
    public int ContaIdAgencia { get; set; }
    public Agencia Agencia { get; set; }
    public string ContaTipo { get; set; }
    public decimal ContaSaldo { get; set; }
}
