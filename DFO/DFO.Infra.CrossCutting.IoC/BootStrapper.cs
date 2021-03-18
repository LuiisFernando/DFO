using DFO.Application.AppService;
using DFO.Application.AppService.Interfaces;
using DFO.Domain.Interface.Respositories;
using DFO.Domain.Interface.Services;
using DFO.Domain.Services;
using DFO.Infra.Data.Context;
using DFO.Infra.Data.Repositories;
using SimpleInjector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DFO.Infra.CrossCutting.IoC
{
    public class BootStrapper
    {
        public static void RegisterServices(Container container)
        {
            container.Register<DFOContext>(Lifestyle.Scoped);

            #region AppService

            container.Register<IUserAppService, UserAppService>();

            #endregion

            #region Services

            container.Register<IUserService, UserService>();

            #endregion

            #region Repositories

            container.Register<IUserRepository, UserRepository>();

            #endregion

        }
    }
}
