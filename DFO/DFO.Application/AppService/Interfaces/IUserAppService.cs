using DFO.Application.ViewModel;
using DFO_Backend.Domain.Entities;
using System.Collections.Generic;

namespace DFO.Application.AppService.Interfaces
{
    public interface IUserAppService : IAppServiceBase<User>
    {
        bool InsertUser(UserVM model);
        bool UpdateUser(UserVM model);
        UserVM GetUserByID(int ID);
        List<UserVM> GetAllUsers();
    }
}
