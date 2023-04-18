// CREATE TABLE `transacao` (
// 	`hash_transacao` INT NOT NULL,
// 	`hash_origem-destino` varchar(50) NOT NULL,
// 	`data_transacao` DATETIME NOT NULL,
// 	`tipo_transacao` varchar(20) NOT NULL,
// 	`valor_transacao` DECIMAL(15) NOT NULL,
// 	PRIMARY KEY (`hash_transacao`)
// );

namespace sharp_coders_hackadev.Models;

public class Transacao
{
    private int hash_transacao { get; set; }
    private string hash_origem_destino { get; set; }
    private DateTime data_transacao { get; set; }
    private string tipo_transacao { get; set; }
    private decimal valor_transacao { get; set; }

}
