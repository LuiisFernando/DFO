using DFO_Backend.Domain.Entities;
using System.Collections.Generic;

namespace DFO.Domain.Interface.Services
{
    public interface IUserService : IServiceBase<User>
    {
        bool addLocalList(User user);
        List<User> GetLocalList();
        bool UpdateUser(User user);
        User GetUserByID(int ID);
    }
}
