using DFO.Application.AppService.Interfaces;
using DFO.Application.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DFO.WebAPI.Controllers
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        private readonly IUserAppService _userAppService;

        public UserController(IUserAppService appService)
        {
            this._userAppService = appService;
        }

        [Route("CreateUser"), HttpPost]
        public IHttpActionResult CreateUser(UserVM user)
        {
            var inserted = this._userAppService.InsertUser(user);
            return Ok(inserted);
        }

        [Route("UpdateUser"), HttpPut]
        public IHttpActionResult UpdateUser(UserVM user)
        {
            var updated = this._userAppService.UpdateUser(user);
            return Ok(updated);
        }

        [Route("GetUserByID/{ID:int}"), HttpGet]
        public IHttpActionResult GetUserByID(int ID)
        {
            var user = _userAppService.GetUserByID(ID);
            return Ok(user);
        }

        [Route("GetAllUsers"), HttpGet]
        public IHttpActionResult GetAllUsers()
        {
            var users = _userAppService.GetAllUsers();
            return Ok(users);
        }
    }
}
