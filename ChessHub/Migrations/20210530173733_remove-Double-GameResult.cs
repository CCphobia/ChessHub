using Microsoft.EntityFrameworkCore.Migrations;

namespace ChessHub.Migrations
{
    public partial class removeDoubleGameResult : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Games_GameResults_GameResultId",
                table: "Games");

            migrationBuilder.DropTable(
                name: "GameResults");

            migrationBuilder.DropIndex(
                name: "IX_Games_GameResultId",
                table: "Games");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GameResults",
                columns: table => new
                {
                    GameResultId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GameResults", x => x.GameResultId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Games_GameResultId",
                table: "Games",
                column: "GameResultId");

            migrationBuilder.AddForeignKey(
                name: "FK_Games_GameResults_GameResultId",
                table: "Games",
                column: "GameResultId",
                principalTable: "GameResults",
                principalColumn: "GameResultId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
