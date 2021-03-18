using DFO_Backend.Domain.Entities;
using System.Collections.Generic;

namespace DFO.Domain.Interface.Respositories
{
    public interface IUserRepository : IRepositoryBase<User>
    {
        bool addLocalList(User user);
        List<User> GetLocalList();
        bool UpdateUser(User user);
        User GetUserByID(int ID);
    }
}
