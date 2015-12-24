var titleElement;
var newElement;
var madlibJson;
var COUNT_OF_TITLE_TYPES = 4;

function replaceWithNewTitle() {
    titleElement.innerHTML = generateRandomNewTitle();
}

function generateRandomNewTitle() {
    var titleString = "",
        titleType = getRandomTitleTypeIndex();
    titleString = generateTitleOfType(titleType);
    return titleString;
}

function getRandomTitleTypeIndex() {
    return Math.floor((Math.random() * COUNT_OF_TITLE_TYPES) + 1);
}

function generateTitleOfType(titleType) {
    var titleString = "";
    if (titleType === 1) {
        titleString = generateTitleGerundNoun();
    } else if (titleType === 2) {
        titleString = generateTitleNounPrepNoun();
    } else if (titleType === 3) {
        titleString = generateTitleGerundNoun();
    } else if (titleType === 4) {
        titleString = generateTitleNounPrepNoun();
    } else {
        alert("illegal argument supplied to generateTitleOfType()");
    }
    return titleString;
}

function generateTitleGerundNoun() {
    var titleString = "",
        gerundIndex = getRandomWithinArray(madlibJson.gerunds.length),
        nounIndex = getRandomWithinArray(madlibJson.nouns.length);
    titleString += madlibJson.gerunds[gerundIndex].str;
    titleString += " ";
    titleString += madlibJson.nouns[nounIndex].str;
    return titleString;
}

function generateTitleNounPrepNoun() {
    var titleString = "",
        firstNounIndex = getRandomWithinArray(madlibJson.nouns.length),
        prepIndex = getRandomWithinArray(madlibJson.titlePrepositions.length),
        secondNounIndex = getRandomWithinArray(madlibJson.nouns.length),
        prepString;
    titleString += madlibJson.nouns[firstNounIndex].str;
    titleString += " ";
    prepString = madlibJson.titlePrepositions[prepIndex].str;
    
    if(prepString === "of") {
        titleString = "The " + titleString;
    }
    
    titleString += prepString;
    titleString += " ";
    titleString += madlibJson.nouns[secondNounIndex].str;
    return titleString;
}

function getRandomWithinArray(arrayLength) {
    return Math.floor((Math.random() * arrayLength));
}

function game() {
    "use strict";
    titleElement = document.getElementById("title");
    newElement = document.getElementById("new");
    replaceWithNewTitle();
    newElement.onclick = replaceWithNewTitle;
}

window.onload = function () {
    "use strict";
    function loadMadlibJson() {
        madlibJson = {
            'nouns': [
                {
                    'str': 'Foucault'
                },
                {
                    'str': 'Deconstruction'
                },//
                {
                    'str': 'Nihilism'
                },
                {
                    'str': 'Theory'
                },
                {
                    'str': 'Realism'
                },
                {
                    'str': 'Debord'
                },
                {
                    'str': 'Modernism'
                },
                {
                    'str': 'Feminism'
                },
                {
                    'str': 'Postcapitalism'
                },
                {
                    'str': 'Narrative'
                },
                {
                    'str': 'Performativity'
                },
                {
                    'str': 'Absurdity'
                },
                {
                    'str': 'Marxism'
                },
                {
                    'str': 'Neocapitalism'
                },
                {
                    'str': 'Hardt and Negri'
                },
                {
                    'str': 'Virilio'
                },
                {
                    'str': 'Butler'
                },
                {
                    'str': 'Žižek'
                },
                {
                    'str': 'MacKinnon'
                },
                {
                    'str': 'Lyotard'
                },
                {
                    'str': 'Derrida'
                },
                {
                    'str': 'Metanarrative'
                },
                {
                    'str': 'Intertextuality'
                },
                {
                    'str': 'Play'
                },
                {
                    'str': 'Erasure'
                },
                {
                    'str': 'Effacement'
                },
                {
                    'str': 'Culture'
                },
                {
                    'str': 'Pastiche'
                },
                {
                    'str': 'Art'
                },
                {
                    'str': 'Inevitability'
                },
                {
                    'str': 'Reductionism'
                },
                {
                    'str': 'Liberation'
                },
                {
                    'str': 'Hyperreality'
                }
            ],
            'gerunds': [
                {
                    'str': 'Reassessing'
                },
                {
                    'str': 'Deconstructing'
                },
                {
                    'str': 'Problematizing'
                },
                {
                    'str': 'Realizing'
                },
                {
                    'str': 'Reassessing'
                },
                {
                    'str': 'Deconstructing'
                },
                {
                    'str': 'Expressing'
                },
                {
                    'str': 'Appropriating'
                },
                {
                    'str': 'Globalizing'
                },
                {
                    'str': 'Localizing'
                },
                {
                    'str': 'Locating'
                },
                {
                    'str': 'Critiquing'
                },
                {
                    'str': 'Repressing'
                },
                {
                    'str': 'Opressing'
                },
                {
                    'str': 'Dividing'
                },
                {
                    'str': 'Rationalizing'
                },
                {
                    'str': 'Reconstructing'
                },
                {
                    'str': 'Constructing'
                },
                {
                    'str': 'Subalternizing'
                },
                {
                    'str': 'Deep Historicizing'
                },
                {
                    'str': 'Intervening in'
                },
                {
                    'str': 'Aestheticizing'
                },
                {
                    'str': 'Deep Ecologizing'
                },
                {
                    'str': 'Undoing'
                },
                {
                    'str': 'Resurfacing'
                },
                {
                    'str': 'Playing'
                },
                {
                    'str': 'Destabilizing'
                },
                {
                    'str': 'Intertextualizing'
                },
                { 
                    'str': 'Occupying'
                }
            ],
            'titlePrepositions': [
                {
                    'str': 'Against'
                },
                {
                    'str': 'Without'
                },
                {
                    'str': 'Throughout'
                },
                {
                    'str': 'Under'
                },
                {
                    'str': 'Amid'
                },
                {
                    'str': 'Beyond'
                },
                {
                    'str': 'Inside'
                },
                {
                    'str': 'Vis-à-vis'
                },
                {
                    'str': 'According to'
                },
                {
                    'str': 'Despite'
                },
                {
                    'str': 'Sans'
                },
                {
                    'str': 'Since'
                },
                {
                    'str': 'According to'
                },
                {
                    'str': 'of'
                }
            ],
            'adjectives': [
                {
                    'str': 'Foucauldian'
                },
                {
                    'str': 'Deconstructed'
                },
                {
                    'str': 'Pretextual'
                },
                {
                    'str': 'Marxist'
                },
                {
                    'str': 'Defining'
                },
                {
                    'str': 'Predialectic'
                },
                {
                    'str': 'Postdialectic'
                },
                {
                    'str': 'Paradigmatic'
                },
                {
                    'str': 'Realist'
                },
                {
                    'str': 'Sartreist'
                },
                {
                    'str': 'Posttextual'
                },
                {
                    'str': 'Theoretical'
                }
            ]
        };
    }
    
    loadMadlibJson();
    game();
};


