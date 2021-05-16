using AutoMapper;
using ChessHub.Entities;
using ChessHub.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChessHub.Infrastructure
{
    public class DefaultDTOMapping : Profile
    {
        public DefaultDTOMapping()
        {
            CreateMap<User, UserDto>()
                .ForMember(dest => dest.Games,
                    opt => opt.MapFrom(src => src.WhiteGames.Concat(src.BlackGames).ToList()));
            CreateMap<UserDto, User>()
                .ForMember(dest => dest.BlackGames,
                    opt => opt.MapFrom(src => src.Games.Where(game => game.BlackPlayer.Email.Equals(src.Email))))
                .ForMember(dest => dest.WhiteGames,
                    opt => opt.MapFrom(src => src.Games.Where(game => game.WhitePlayer.Email.Equals(src.Email))));

            CreateMap<Game, GameDto>();
            CreateMap<GameDto, Game>();
        }
    }
}
