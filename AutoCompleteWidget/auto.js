// var language =


$("document").ready(function () {
    $("#input").autocomplete({
        source: ["HTML", "CSS", "Javascript", "PHP",
            " Java", "Python", "C", " C++", "C#",
            "Perl", "Ruby", "Scala", " COBOL",
            "Basic", "Fortran", "Lisp", "Typescript"]
    }, {
        delay: 2000,
        minLength: 3,
        autoFocus: false
    })
})