$(document).ready(function () {

    var i = 0;
    $("input[name=ans][value=" + 1 + "]").prop('checked', true);
    i = DoQuizz(i);
    $("input[name=ans][value=" + 1 + "]").prop('checked', false);


    $('#Valider').click(function () {
        var r = $('input[name=ans]:checked')[0];
        Repondues.push($(r).val());
        if ($(r).val()) {
            $('input[name="ans"]:checked').prop('checked', false); //uncheck previous radio
            if (i <= 6) {
                i = DoQuizz(i);
            } else {
                ThrowResults(Repondues);
            }
        } else {
            swal(
                'Votre choix?',
                'Choisissez une réponse',
                'warning'
            )
        }
    })


    $('.list').on("click", "li", function () {
        $("input[name=ans][value=" + $(this).val() + "]").prop('checked', true);
    })

});



var Qarray = ["1.	Que voulez-vous faire plus tard ?", "2.	Avez-vous des notions dans :", "3.	Je suis plutôt à la recherche d’une formation :", "4.	Je suis plutôt attiré par:", "5.	Je suis plutôt à l’aise sur :", "6.  Préfères-tu travailler dans le domaine de: l'informatique ou dans d'autres domaines?", "7.  Es-tu plutôt quelqu'un qui aime: la technique, le management, la créativité?"];

var Rarray = [
    ["Du développement informatique", "De l'entrepreneuriat", "De la gestion de projet"],
    ["Le développement informatique", "La communication", "Le management"],
    ["En alternance", "En initial ", "Je ne sais pas encore"],
    ["Le web digital", "Le développement", "Le management"],
    ["Ordinateur", "Manager des équipes", "Entreprendre des projets"],
    ["Informatique", "Le réseau", "d'Autres Domaines"],
    ["La technique", "Le Management", "La créativité"]
];

var Question = $('#Question');
var Reponses = $('#Reponses');

var Repondues = [];

var B1 = $('.RB1');
var B2 = $('.RB2');
var B3 = $('.RB3');


function DoQuizz(i) {
    $(Question).text(Qarray[i]); //set Question
    for (var k = 0; k != 3; k++) { //fill answers
        var r = $('#Reponses').children()[k];
        $(r).text(Rarray[i][k]);
    }

    return i += 1;
}

function ThrowResults(Reps) {
    var Epsi = 0;
    var Wis = 0;
    var Ifag = 0;

    Reps.forEach(function (rep, i) {
        switch (i) {
            case 0:
                if (rep == 1) {
                    Epsi += 1;
                } else {
                    if (rep == 2) {
                        Ifag += 1;
                    } else {
                        if (rep == 3) {
                            Wis += 1;
                        }
                    }
                }
                break;

            case 1:
                if (rep == 1) {
                    Epsi += 1;
                } else {
                    if (rep == 2) {
                        Wis += 1;
                    } else {
                        if (rep == 3) {
                            Ifag += 1;
                        }
                    }
                }
                break;

            case 2:
                if (rep == 1) {
                    Epsi += 1;
                    Wis += 1;
                    Ifag += 1;
                } else {
                    if (rep == 2) {
                        Epsi += 1;
                        Wis += 1;
                        Ifag += 1;
                    } else {
                        if (rep == 3) {
                            Epsi += 1;
                            Wis += 1;
                            Ifag += 1;
                        }
                    }
                }
                break;

            case 3:
                if (rep == 1) {
                    Wis += 1;
                } else {
                    if (rep == 2) {
                        Epsi += 1;
                    } else {
                        if (rep == 3) {
                            Ifag += 1;
                        }
                    }
                }
                break;

            case 4:
                if (rep == 1) {
                    Epsi += 1;
                } else {
                    if (rep == 2) {
                        Wis += 1;
                    } else {
                        if (rep == 3) {
                            Ifag += 1;
                        }
                    }
                }
                break;

            case 5:
                if (rep == 1) {
                    Epsi += 1;
                    Wis += 1;
                } else {
                    if (rep == 2) {
                        Epsi += 1;
                    } else {
                        if (rep == 3) {
                            Wis += 1;
                            Ifag += 1;
                        }
                    }
                }
                break;

            case 6:
                if (rep == 1) {
                    Epsi += 1;
                    Wis += 1;
                    Ifag += 1;
                } else {
                    if (rep == 2) {
                        Epsi += 1;
                        Wis += 1;
                        Ifag += 1;
                    } else {
                        if (rep == 3) {
                            Epsi += 1;
                            Wis += 1;
                            Ifag += 1;
                        }
                    }
                }
                break;

            default:

        }
    });
    var chart = '<canvas id="myChart" width="400" height="400"></canvas>';

    var Qnote = $('#Qnote')[0];
    $(Qnote).html(chart);
   
    $('#Valider').hide();

    var ctx = document.getElementById("myChart").getContext("2d");
    data: data = {
        datasets: [{
            data: [Epsi, Wis, Ifag],
            backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56"],
            label: "My dataset"
        }],
        labels: ["EPSI", "WIS", "IFAG"]
    }
    var ctx = $("#myChart");
    new Chart(ctx, {
        data: data,
        type: "polarArea"
    });
    
    $(Qnote).css('transform', 'translateX(50px)');
}