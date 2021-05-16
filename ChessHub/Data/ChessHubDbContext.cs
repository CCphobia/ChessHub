using ChessHub.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Data
{
    public class ChessHubDbContext : DbContext
    {
        public ChessHubDbContext(DbContextOptions<ChessHubDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
           .Entity<Game>()
           .Property(e => e.GameResultId)
           .HasConversion<int>();

            modelBuilder
                .Entity<GameResult>()
                .Property(e => e.GameResultId)
                .HasConversion<int>();

            modelBuilder
                .Entity<GameResult>().HasData(
                    Enum.GetValues(typeof(GameResultId))
                        .Cast<GameResultId>()
                        .Select(e => new GameResult()
                        {
                            GameResultId = e,
                            Name = e.ToString()
                        })
                );
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<GameResult> GameResults { get; set; }
    }
}
