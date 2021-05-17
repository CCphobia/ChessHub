using ChessHub.Entities;
using ChessHub.Models.Dtos;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Data
{
    public class ChessHubDbContext : ApiAuthorizationDbContext<User>
    {
        public ChessHubDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder
        //   .Entity<Game>()
        //   .Property(e => e.GameResultId)
        //   .HasConversion<int>();

        //    modelBuilder
        //        .Entity<GameResult>()
        //        .Property(e => e.GameResultId)
        //        .HasConversion<int>();

        //    modelBuilder
        //        .Entity<GameResult>().HasData(
        //            Enum.GetValues(typeof(GameResultId))
        //                .Cast<GameResultId>()
        //                .Select(e => new GameResult()
        //                {
        //                    GameResultId = e,
        //                    Name = e.ToString()
        //                })
        //        );
        //}

        //public DbSet<User> Users { get; set; } already implemented ApiAuthorizationDbContext<User> 
        public DbSet<Game> Games { get; set; }
        public DbSet<GameResult> GameResults { get; set; }
    }
}
