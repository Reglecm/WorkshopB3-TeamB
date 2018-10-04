$(document).ready(function () {

    var i = 0;

    $('#Valider').click(function () {
        if (i <= 6) {
            i = DoQuizz(i);
        } else {
            ThrowResults();
        }

    })
});



var Qarray = ["1.	Que voulez-vous faire plus tard ?", "2.	Avez-vous des notions dans :", "3.	Je suis plutôt à la recherche d’une formation :", "4.	Je suis plutôt attiré par:", "5.	Je suis plutôt à l’aise sur :", "6.  Préfères-tu travailler dans le domaine de: l'informatique ou dans d'autres domaines?", "7.  Es-tu plutôt quelqu'un qui aime: la technique, le management, la créativité?"];

var Rarray = [
    ["Du développement informatique", "De entrepreneuriat", "De la gestion de projet"],
    ["Le développement informatique", "La communication", "Le management"],
    ["En alternance", "En initial ", "Je ne sais pas encore"],
    ["Le web digital", "Le développement", "Le management"],
    ["Ordinateur", "Manager des équipes", "Entreprendre des projets"],
    ["Informatique", "Le réseau", "d'Autre Domaines"],
    ["Informatique", "Le réseau", "d'Autre Domaines"]
];

var Question = $('#Question');
var Reponses = $('#Reponses');

var Repondues = [];

function DoQuizz(i) {
    console.log(i, 'in');
    $(Question).text(Qarray[i]);
    for (var k = 0; k != 3; k++) {
        var r = $('#Reponses').children()[k];
        $(r).text(Rarray[i][k]);
    }
    return i += 1;
}