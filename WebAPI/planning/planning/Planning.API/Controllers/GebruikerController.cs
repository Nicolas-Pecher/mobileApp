using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MySql.Data.MySqlClient;
using Planning.API.Models;


namespace Planning.API.Controllers
{
    [AllowAnonymous]
    public class GebruikerController : ApiController
    {
        // GET api/Gebruiker/
        public List<Gebruiker> Get()
        {
            MySqlConnection conn = WebApiConfig.conn();

            MySqlCommand query = conn.CreateCommand();

            query.CommandText = "SELECT * FROM `Gebruikers`";

            var gebruikerLijst = new List<Gebruiker>();

            try
            {
                conn.Open();
                MySqlDataReader fetch_query = query.ExecuteReader();

                while (fetch_query.Read())
                {
                    gebruikerLijst.Add(new Gebruiker(Int32.Parse(fetch_query["gebruikerId"].ToString()), fetch_query["naam"].ToString(), fetch_query["email"].ToString(), fetch_query["wachtwoord"].ToString(), fetch_query["rol"].ToString()));
                }
            }
            catch (MySql.Data.MySqlClient.MySqlException ex)
            {
                gebruikerLijst.Add(new Gebruiker(0, "failure", ex.ToString(), "", ""));

            }
            finally
            {
                conn.Close();
            }


            return gebruikerLijst;
        }

        // GET api/Gebruiker/5
        public Gebruiker Get(int id)
        {
            MySqlConnection conn = WebApiConfig.conn();

            MySqlCommand query = conn.CreateCommand();

            query.CommandText = "SELECT * FROM `Gebruikers` WHERE `gebruikerId` = @id";

            query.Parameters.AddWithValue("@id", id);

            Gebruiker gebruiker = null;

            try
            {
                conn.Open();
                MySqlDataReader fetch_query = query.ExecuteReader();

                while (fetch_query.Read())
                {
                    gebruiker = new Gebruiker(Int32.Parse(fetch_query["gebruikerId"].ToString()), fetch_query["naam"].ToString(), fetch_query["email"].ToString(), fetch_query["wachtwoord"].ToString(), fetch_query["rol"].ToString());
                }
            }
            catch (MySql.Data.MySqlClient.MySqlException ex)
            {
                gebruiker = new Gebruiker(0, "failure", ex.ToString(), "", "");

            }
            finally
            {
                conn.Close();
            }


            return gebruiker;
        }

        // POST: api/Gebruiker
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Gebruiker/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Gebruiker/5
        public void Delete(int id)
        {
        }
    }
}
