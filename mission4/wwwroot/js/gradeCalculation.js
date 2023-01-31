$("#submitGrades").click(function () {

    /*Grabs values of each grade input*/
    var assignmentGrade = $("#assignmentGrade").val();
    var groupGrade = $("#groupGrade").val();
    var quizGrade = $("#quizGrade").val();
    var midtermGrade = $("#midtermGrade").val();
    var finalGrade = $("#finalGrade").val();
    var intexGrade = $("#intexGrade").val();
    var totalGrade = parseInt(assignmentGrade) + parseInt(groupGrade) + parseInt(quizGrade)
        + parseInt(midtermGrade) + parseInt(finalGrade) + parseInt(intexGrade);

    /*Determines which letter grade is output*/
    if (totalGrade >= 94)
        $('#printIt').text(totalGrade + '% (A)');

    else if (totalGrade >= 90)
        $('#printIt').text(totalGrade + '% (A-)');

    else if (totalGrade >= 87)
        $('#printIt').text(totalGrade + '% (B+)');

    else if (totalGrade >= 84)
        $('#printIt').text(totalGrade + '% (B)');

    else if (totalGrade >= 80)
        $('#printIt').text(totalGrade + '% (B-)');

    else if (totalGrade >= 77)
        $('#printIt').text(totalGrade + '% (C+)');

    else if (totalGrade >= 74)
        $('#printIt').text(totalGrade + '% (C)');

    else if (totalGrade >= 70)
        $('#printIt').text(totalGrade + '% (C-)');

    else if (totalGrade >= 67)
        $('#printIt').text(totalGrade + '% (D+)');

    else if (totalGrade >= 64)
        $('#printIt').text(totalGrade + '% (D)');

    else if (totalGrade >= 60)
        $('#printIt').text(totalGrade + '% (D-)');

    else
        $('#printIt').text(totalGrade + '% (E)');
})