using DFO.Infra.CrossCutting.IoC;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Owin;
using SimpleInjector;
using SimpleInjector.Integration.WebApi;
using System;
using System.Threading.Tasks;
using System.Web.Http;

[assembly: OwinStartup(typeof(DFO.WebAPI.Startup))]

namespace DFO.WebAPI
{
    public class Startup
    {
        public static Container Container = new Container();

        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();

            //Injeção de Dependencia (SimpleInjector)
            Container.Options.DefaultScopedLifestyle = new WebApiRequestLifestyle();

            BootStrapper.RegisterServices(Container);

            Container.RegisterWebApiControllers(GlobalConfiguration.Configuration);

            Container.Verify();

            config.DependencyResolver = new SimpleInjectorWebApiDependencyResolver(Container);
            GlobalConfiguration.Configuration.DependencyResolver = new SimpleInjectorWebApiDependencyResolver(Container);

            app.UseCors(CorsOptions.AllowAll);

        }
    }
}
