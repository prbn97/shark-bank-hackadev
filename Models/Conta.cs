// CREATE TABLE `conta` (
// 	`hash_conta` varchar(255) NOT NULL,
// 	`hash_cliente` varchar(255) NOT NULL,
// 	`agencia_conta` INT NOT NULL,
// 	`tipo_conta` varchar(50) NOT NULL,
// 	`saldo_conta` DECIMAL(15) NOT NULL,
// 	PRIMARY KEY (`hash_conta`)
// );


namespace sharp_coders_hackadev.Models;

public class Conta
{
    private string hash_conta { get; set; }
    private string hash_cliente { get; set; }
    private int agencia_conta { get; set; }
    private string tipo_conta { get; set; }
    private decimal saldo_conta { get; set; }
    private Cliente Cliente { get; set; }
}
