using DFO.Application.AppService.Interfaces;
using DFO.Application.ViewModel;
using DFO.Domain.Interface.Services;
using DFO_Backend.Application.AppService;
using DFO_Backend.Domain.Entities;
using System.Collections.Generic;

namespace DFO.Application.AppService
{
    public class UserAppService : AppServiceBase<User>, IUserAppService
    {
        private IUserService _userService;

        public UserAppService(IUserService userService)
            : base(userService)
        {
            this._userService = userService;
        }

        public List<UserVM> GetAllUsers()
        {
            List<UserVM> listReturn = new List<UserVM>();
            this._userService.GetLocalList().ForEach(x => listReturn.Add(new UserVM(x)));

            return listReturn;
        }

        public UserVM GetUserByID(int ID)
        {
            var user = this._userService.GetUserByID(ID);

            return user != null ? new UserVM(user) : null;
        }

        public bool InsertUser(UserVM model)
        {
            return this._userService.addLocalList(UserVM.ConvertModel(model));
        }

        public bool UpdateUser(UserVM user)
        {
            return this._userService.UpdateUser(UserVM.ConvertModel(user));
        }
    }
}
