using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AimyRoster.Models
{
    public class StaffModelView
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int SiteId { get; set; }
        public string SiteName { get; set; }
    }
}