function saveConf() {
    alert("Dina ändringar är sparade");
}

function dontSaveConf() {
    var x;
    if (confirm("Är du säker på att du inte vill spara dina ändringar?") == true) {
        x = "Ja";
    } else {
        x = "Nej";
    }
}