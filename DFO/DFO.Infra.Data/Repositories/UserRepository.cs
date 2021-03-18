using DFO.Domain.Interface.Respositories;
using DFO.Infra.Data.Context;
using DFO_Backend.Domain.Entities;
using System.Collections.Generic;
using System.Linq;

namespace DFO.Infra.Data.Repositories
{
    public class UserRepository : RepositoryBase<User>, IUserRepository
    {
        private static List<User> localList = new List<User>();
        public UserRepository(DFOContext context) : base(context)
        {
        }

        public bool addLocalList(User user)
        {
            user.ID = localList != null ? localList.Count + 1 : 1;
            localList.Add(user);
            return true;
        }

        public List<User> GetLocalList()
        {
            return localList;
        }

        public bool UpdateUser(User user)
        {
            try
            {
                var userList = localList.FirstOrDefault(x => x.ID == user.ID);
                userList.Name = user.Name;
                userList.Age = user.Age;
                userList.Address = user.Address;
                return true;
            }
            catch
            {
                return false;
            }
            
        }

        public User GetUserByID(int ID)
        {
            return localList.FirstOrDefault(x => x.ID == ID);
        }
    }
}
