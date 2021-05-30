using Microsoft.EntityFrameworkCore.Migrations;

namespace ChessHub.Migrations
{
    public partial class AddOwnerUserToRoom : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "OwnerPlayerId",
                table: "Games",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Games_OwnerPlayerId",
                table: "Games",
                column: "OwnerPlayerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Games_AspNetUsers_OwnerPlayerId",
                table: "Games",
                column: "OwnerPlayerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Games_AspNetUsers_OwnerPlayerId",
                table: "Games");

            migrationBuilder.DropIndex(
                name: "IX_Games_OwnerPlayerId",
                table: "Games");

            migrationBuilder.DropColumn(
                name: "OwnerPlayerId",
                table: "Games");
        }
    }
}
