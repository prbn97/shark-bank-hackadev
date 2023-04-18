// CREATE TABLE `endereco` (
// 	`hash_cliente` varchar(255) NOT NULL,
// 	`cep_endereco` INT(8) NOT NULL,
// 	`logradouro_endereco` varchar(50) NOT NULL,
// 	`numero_endereco` INT(50) NOT NULL,
// 	`complemento_endereco` varchar(50) NOT NULL,
// 	`bairro_endereco` varchar(50) NOT NULL,
// 	`uf_endereco` varchar(2) NOT NULL
// );


namespace sharp_coders_hackadev.Models;

public class Endereco
{
    private string hash_cliente { get; set; }
    private int cep_endereco { get; set; }
    private string logradouro_endereco { get; set; }
    private int numero_endereco { get; set; }
    private string complemento_endereco { get; set; }
    private string bairro_endereco { get; set; }
    private string uf_endereco { get; set; }

}
