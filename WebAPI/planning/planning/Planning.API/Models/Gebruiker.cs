using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Planning.API.Models
{
    public class Gebruiker
    {
        public int gebruikerId { get; set; }
        public string naam { get; set; }
        public string email { get; set; }
        public string wachtwoord { get; set; }
        public string rol { get; set; }

        public Gebruiker(int gebruikerId, string naam, string email, string wachtwoord, string rol)
        {
            this.gebruikerId = gebruikerId;
            this.naam = naam;
            this.email = email;
            this.wachtwoord = wachtwoord;
            this.rol = rol;
        }
    }
}