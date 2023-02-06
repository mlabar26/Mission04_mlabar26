using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace mission4.models
{
    public class gradeCalcModel
    {
        //Validation within this class. I decided to do 0-50 and the rest 0-10 due to the grade setup
        [Required]

        [Range(0, 50, ErrorMessage = "Enter a number between 0-50")]
        public int assignments { get; set; }

        [Range(0, 10, ErrorMessage = "Enter a number between 0-10")]
        public int projects { get; set; }

        [Range(0, 10, ErrorMessage = "Enter a number between 0-10")]
        public int quizzes { get; set; }

        [Range(0, 10, ErrorMessage = "Enter a number between 0-10")]
        public int midterm { get; set; }

        [Range(0, 10, ErrorMessage = "Enter a number between 0-10")] 
        public int final { get; set; }

        [Range(0, 10, ErrorMessage = "Enter a number between 0-10")]
        public int intex { get; set; }

    }
}
