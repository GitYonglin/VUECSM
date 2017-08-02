using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CMS.Model;
using System.Security.Claims;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Cors;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CMS.Controllers
{
    
    public class AccountController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }
        [EnableCors("MyDomain")]
        [HttpPost]
        public async Task<IActionResult> Login(User userFromFore)
        {
            var userFromStorage = TestUserStorage.UserList
                .FirstOrDefault(m => m.UserName == userFromFore.UserName && m.Password == userFromFore.Password);

            if (userFromStorage != null)
            {
                //you can add all of ClaimTypes in this collection 
                var claims = new List<Claim>()
                {
                    new Claim(ClaimTypes.Name,userFromStorage.UserName) 
                    //,new Claim(ClaimTypes.Email,"emailaccount@microsoft.com")  
                };

                //init the identity instances 
                var userPrincipal = new ClaimsPrincipal(new ClaimsIdentity(claims, "SuperSecureLogin"));

                //signin 
                await HttpContext.Authentication.SignInAsync("Cookie", userPrincipal, new AuthenticationProperties
                {
                    //ExpiresUtc = DateTime.UtcNow.AddMinutes(20),
                    ExpiresUtc = DateTime.Now.AddMinutes(1),
                    IsPersistent = false,
                    AllowRefresh = true
                });
                return RedirectToAction("Index", "Home");
            }
            else
            {
                ViewBag.ErrMsg = "UserName or Password is invalid";

                return View();
            }
        }

        public async Task<IActionResult> Logout()
        {
            await HttpContext.Authentication.SignOutAsync("Cookie");

            return RedirectToAction("Index", "Home");
        }


        public static class TestUserStorage
        {
            public static List<User> UserList { get; set; } = new List<User>() {
                new User { UserName = "peach",Password = "112233"}
            };
        }
    }
}
