var pLanguages = [
    "ActionScript", "AppleScript", "ASP", "JavaScript", "Lisp", "Perl", "PHP", "Python", "C", "C++", "Java"];

$( function() {
    $( "#birthday" ).datepicker();
    $( "#pLanguages" ).autocomplete({
        source: pLanguages });
});


