using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Calendar.API.Models
{
    public class Gebruiker
    {
        public string gebruikerid { get; set; }
        public string paswoord { get; set; }
        public string email { get; set; }
        public string rol { get; set; }
        public string bedrijf { get; set; }
        public List<TimeSheets> listTimesheet { get; set; }
    }
}
