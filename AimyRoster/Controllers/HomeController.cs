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

        public ActionResult GetStaff()
        {
            var result = db.Staffs.Select(x => new StaffModelView()
            {
                Name = x.Name,
                SiteId = x.SiteId,
                SiteName = x.SiteName
            }).AsEnumerable();

            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}