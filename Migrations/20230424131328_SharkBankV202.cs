using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace sharp_coders_hackadev.Migrations
{
    /// <inheritdoc />
    public partial class SharkBankV202 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "agencias",
                columns: table => new
                {
                    agencia_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    agencia_nome = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_agencias", x => x.agencia_id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "clientes",
                columns: table => new
                {
                    cliente_hash = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    cliente_cpf = table.Column<string>(type: "varchar(11)", maxLength: 11, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    cliente_nome = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    cliente_email = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    cliente_celular = table.Column<string>(type: "varchar(20)", maxLength: 20, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    cliente_ativo = table.Column<bool>(type: "tinyint(1)", nullable: false, defaultValue: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_clientes", x => x.cliente_hash);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "acessos",
                columns: table => new
                {
                    acesso_hash = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    acesso_hash_cliente = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_acessos", x => x.acesso_hash);
                    table.ForeignKey(
                        name: "FK_acessos_clientes_acesso_hash_cliente",
                        column: x => x.acesso_hash_cliente,
                        principalTable: "clientes",
                        principalColumn: "cliente_hash",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "contas",
                columns: table => new
                {
                    conta_hash = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    conta_hash_cliente = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    conta_id_agencia = table.Column<int>(type: "int", maxLength: 255, nullable: false),
                    conta_tipo = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    conta_saldo = table.Column<decimal>(type: "decimal(65,30)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_contas", x => x.conta_hash);
                    table.ForeignKey(
                        name: "FK_contas_agencias_conta_id_agencia",
                        column: x => x.conta_id_agencia,
                        principalTable: "agencias",
                        principalColumn: "agencia_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_contas_clientes_conta_hash_cliente",
                        column: x => x.conta_hash_cliente,
                        principalTable: "clientes",
                        principalColumn: "cliente_hash",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "enderecos",
                columns: table => new
                {
                    endereco_hash = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    endereco_hash_cliente = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    endereco_cep = table.Column<int>(type: "int", nullable: false),
                    endereco_logradouro = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    endereco_numero = table.Column<int>(type: "int", nullable: false),
                    endereco_complemento = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    endereco_bairro = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    endereco_estado = table.Column<string>(type: "varchar(2)", maxLength: 2, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_enderecos", x => x.endereco_hash);
                    table.ForeignKey(
                        name: "FK_enderecos_clientes_endereco_hash_cliente",
                        column: x => x.endereco_hash_cliente,
                        principalTable: "clientes",
                        principalColumn: "cliente_hash",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "transacoes",
                columns: table => new
                {
                    transacao_hash = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    transacao_hash_cliente = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    transacao_data = table.Column<DateTime>(type: "datetime", nullable: false),
                    transacao_origem = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    transacao_tipo = table.Column<string>(type: "varchar(20)", maxLength: 20, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    transacao_valor = table.Column<decimal>(type: "decimal (65,30)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_transacoes", x => x.transacao_hash);
                    table.ForeignKey(
                        name: "FK_transacoes_clientes_transacao_hash_cliente",
                        column: x => x.transacao_hash_cliente,
                        principalTable: "clientes",
                        principalColumn: "cliente_hash",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_acessos_acesso_hash_cliente",
                table: "acessos",
                column: "acesso_hash_cliente");

            migrationBuilder.CreateIndex(
                name: "IX_contas_conta_hash_cliente",
                table: "contas",
                column: "conta_hash_cliente");

            migrationBuilder.CreateIndex(
                name: "IX_contas_conta_id_agencia",
                table: "contas",
                column: "conta_id_agencia");

            migrationBuilder.CreateIndex(
                name: "IX_enderecos_endereco_hash_cliente",
                table: "enderecos",
                column: "endereco_hash_cliente");

            migrationBuilder.CreateIndex(
                name: "IX_transacoes_transacao_hash_cliente",
                table: "transacoes",
                column: "transacao_hash_cliente");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "acessos");

            migrationBuilder.DropTable(
                name: "contas");

            migrationBuilder.DropTable(
                name: "enderecos");

            migrationBuilder.DropTable(
                name: "transacoes");

            migrationBuilder.DropTable(
                name: "agencias");

            migrationBuilder.DropTable(
                name: "clientes");
        }
    }
}
