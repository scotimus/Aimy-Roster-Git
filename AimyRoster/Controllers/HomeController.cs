using AimyRoster.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AimyRoster.Controllers
{
    public class HomeController : Controller
    {
        RosterEntities db = new RosterEntities();
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ReadSite()
        {
            var result = db.Sites.Select(x => new SiteModelView()
            {
                Id = x.Id,
                Name = x.Name
            }).AsEnumerable();

            return Json(result,JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetStaff(int getSiteId)
        {
            var dbconn = new RosterEntities();
            //var result = db.Staffs.Select(x => new StaffModelView()
            var result = 
                (from Staffs in dbconn.Staffs
                 where Staffs.SiteId == getSiteId
                 select new StaffModelView
                 {
                    Name = Staffs.Name,
                    SiteId = Staffs.SiteId,
                    SiteName = Staffs.SiteName
                }).AsEnumerable();

            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}