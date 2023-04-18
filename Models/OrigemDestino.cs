// CREATE TABLE `origem-destino` (
// 	`hash_origem-destino` varchar(255) NOT NULL,
// 	`hash_origem` varchar(255) NOT NULL,
// 	`hash_destino` varchar(255) NOT NULL,
// 	PRIMARY KEY (`hash_origem-destino`)
// );

namespace sharp_coders_hackadev.Models;

public class OrigemDestino
{
    private string hash_origem_destino { get; set; }
    private string hash_origem { get; set; }
    private string hash_destino { get; set; }

}