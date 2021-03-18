using DFO_Backend.Domain.Entities;

namespace DFO.Application.ViewModel
{
    public class UserVM
    {

        public UserVM()
        {

        }

        public UserVM(User user)
        {
            ID = user.ID;
            Name = user.Name;
            Age = user.Age;
            Address = user.Address;
        }

        public static User ConvertModel(UserVM userVM)
        {
            var user = new User
            {
                ID = userVM.ID ?? 0,
                Name = userVM.Name,
                Age = userVM.Age,
                Address = userVM.Address
            };

            return user;
        }

        public int? ID { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Address { get; set; }
    }
}
