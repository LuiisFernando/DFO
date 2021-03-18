using DFO.Domain.Interface.Respositories;
using DFO.Domain.Interface.Services;
using DFO_Backend.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DFO.Domain.Services
{
    public class UserService : ServiceBase<User>, IUserService
    {
        private IUserRepository _repository;

        public UserService(IUserRepository repository)
            : base(repository)
        {
            this._repository = repository;
        }

        public bool addLocalList(User user)
        {
            return this._repository.addLocalList(user);
        }

        public List<User> GetLocalList()
        {
            return this._repository.GetLocalList();
        }

        public bool UpdateUser(User user)
        {
            return this._repository.UpdateUser(user);
        }

        public User GetUserByID(int ID)
        {
            return this._repository.GetUserByID(ID);
        }
    }
}
