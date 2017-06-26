using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace CMS.Controllers
{
    
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }

        [EnableCors("MyDomain")]
        public IActionResult TabData()
        {
            var v = new List<Tab> { new Tab{ Id = 1, Name = "好滋好味鸡蛋仔", ImgUrl = "http://element.eleme.io/static/hamburger.50e4091.png", Price = 99, Number = 999, Shelves = true, Sales = 9999 },
                new Tab{ Id = 2, Name = "好滋好味鸡蛋仔", ImgUrl = "http://element.eleme.io/static/hamburger.50e4091.png", Price = 99, Number = 999, Shelves = true, Sales = 9999 },
                new Tab{ Id = 3, Name = "好滋好味鸡蛋仔", ImgUrl = "http://element.eleme.io/static/hamburger.50e4091.png", Price = 99, Number = 999, Shelves = true, Sales = 9999 },
                new Tab{ Id = 4, Name = "好滋好味鸡蛋仔", ImgUrl = "http://element.eleme.io/static/hamburger.50e4091.png", Price = 99, Number = 999, Shelves = true, Sales = 9999 }
            };
            return Json(v);
        }

        public IActionResult TabData2()
        {
            var v = new List<Tab> { new Tab{ Id = 1, Name = "好滋好味鸡蛋仔", ImgUrl = "http://element.eleme.io/static/hamburger.50e4091.png", Price = 99, Number = 999, Shelves = true, Sales = 9999 },
                new Tab{ Id = 2, Name = "好滋好味鸡蛋仔", ImgUrl = "http://element.eleme.io/static/hamburger.50e4091.png", Price = 99, Number = 999, Shelves = true, Sales = 9999 },
                new Tab{ Id = 3, Name = "好滋好味鸡蛋仔", ImgUrl = "http://element.eleme.io/static/hamburger.50e4091.png", Price = 99, Number = 999, Shelves = true, Sales = 9999 },
                new Tab{ Id = 4, Name = "好滋好味鸡蛋仔", ImgUrl = "http://element.eleme.io/static/hamburger.50e4091.png", Price = 99, Number = 999, Shelves = true, Sales = 9999 }
            };
            return Json(v);
        }

    }

    public class Tab
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImgUrl { get; set; }
        public int Price { get; set; }
        public int Number { get; set; }
        public bool Shelves { get; set; }
        public int Sales { get; set; }
    }
}
