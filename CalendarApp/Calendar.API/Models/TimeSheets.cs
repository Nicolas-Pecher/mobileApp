using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Calendar.API.Models
{
    public class TimeSheets
    {
        public string TimesheetID { get; set; }
        public string Beschrijving { get; set; }
        public string beginuur { get; set; }
        public string einduur { get; set; }
        public string overuur { get; set; }
        public string datum { get; set; }
    }
}
