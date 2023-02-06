using Microsoft.AspNetCore.Mvc;
using mission4.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mission4.controllers
{
    public class generalController : Controller
    {
        //Returns view
        public IActionResult Index()
        {
            return View();
        }

        //Returns view
        [HttpGet]
        public IActionResult gradeCalc()
        {
            return View();
        }

        //For sending the grade result 
        [HttpPost]
        public IActionResult gradeCalc(gradeCalcModel model)
        {
            return View();
        }
    }
}
