// CREATE TABLE `agencia` (
// 	`id_agencia` INT NOT NULL AUTO_INCREMENT,
// 	`nome_agencia` varchar(50) NOT NULL,
// 	PRIMARY KEY (`id_agencia`)
// );

namespace sharp_coders_hackadev.Models;

public class Agencia
{
    private int id_agencia { get; set; }
    private string nome_agencia { get; set; }
}
