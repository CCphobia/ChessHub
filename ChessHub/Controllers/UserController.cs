using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using ChessHub.Entities;
using ChessHub.Services;
using ChessHub.Models.Dtos;

namespace ChessHub.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly IUserService _userService;

        public UserController(ILogger<UserController> logger, IUserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [HttpGet]
        public IActionResult GetUser(string email)
        {
            UserDto user = _userService.GetUser(email);

            if(user == null)
            {
                return NotFound();
            } else
            {
                return Ok(user);
            }
        }

        [HttpGet]
        [Route("GetUsers")]
        public IActionResult GetUsers()
        {
            List<UserDto> users = _userService.GetUsers();

            if (users.Count == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(users);
            }
        }

        [HttpPost]
        public IActionResult AddUser([FromBody] UserDto user)
        {
            UserDto addedUser = _userService.AddUser(user);

            if(addedUser == null)
            {
                return BadRequest();
            } else
            {
                return CreatedAtAction(nameof(GetUser), addedUser);
            }
        }

        [HttpPost("/{email}")]
        public IActionResult EditUser(string email, [FromBody] UserDto newData)
        {
            UserDto editedUser = _userService.EditUser(email, newData);

            if(editedUser == null)
            {
                return BadRequest();
            } else
            {
                return Ok(editedUser);
            }
        }

        [HttpDelete("/{email}")]
        public IActionResult DeleteUser(string email)
        {
            UserDto deletedUser = _userService.RemoveUser(email);

            if (deletedUser == null)
            {
                return BadRequest();
            }
            else
            {
                return Ok(deletedUser);
            }
        }
    }
}

