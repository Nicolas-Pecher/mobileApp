﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using MySql.Data.MySqlClient;

namespace Planning.API
{
 

    public static class WebApiConfig
    {
        public static MySqlConnection conn()
        {
            string conn_string = "Server=dt5.ehb.be;Database=1819MobileApp;Uid=1819MobileApp;Pwd=KV7TubB;";

            MySqlConnection conn = new MySqlConnection(conn_string);

            return conn;
        }

        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            var appXmlType = config.Formatters.XmlFormatter.SupportedMediaTypes.FirstOrDefault(t => t.MediaType == "application/xml");
            config.Formatters.XmlFormatter.SupportedMediaTypes.Remove(appXmlType);
        }
    }
}
