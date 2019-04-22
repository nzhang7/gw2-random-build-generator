// elements to link script to HTML page
var classEl;
var traitsEl;
var utilsEl;
var weapsEl;
var amuSigRuneEl;

window.onload = function(){
    classEl = document.querySelector("#Class");
    traitsEl = document.querySelector("#Traits");
    utilsEl = document.querySelector("#Utilities");
    weapsEl = document.querySelector("#Weapons");
    amuSigRuneEl = document.querySelector("#Amulet_Sigil_Rune");
	// add event listeners to buttons
    let randButton = document.querySelector("#Random");
    randButton.addEventListener("click", function(){randomize(-1)});
    let guardButton = document.querySelector("#Guardian");
    guardButton.addEventListener("click", function(){randomize(0)});
    let warButton = document.querySelector("#Warrior");
    warButton.addEventListener("click", function(){randomize(1)});
    let engiButton = document.querySelector("#Engineer");
    engiButton.addEventListener("click", function(){randomize(2)});
    let rangerButton = document.querySelector("#Ranger");
    rangerButton.addEventListener("click", function(){randomize(3)});
    let thiefButton = document.querySelector("#Thief");
    thiefButton.addEventListener("click", function(){randomize(4)});
    let eleButton = document.querySelector("#Elementalist");
    eleButton.addEventListener("click", function(){randomize(5)});
    let mesButton = document.querySelector("#Mesmer");
    mesButton.addEventListener("click", function(){randomize(6)});
    let necroButton = document.querySelector("#Necromancer");
    necroButton.addEventListener("click", function(){randomize(7)});
    let revButton = document.querySelector("#Revenant");
    revButton.addEventListener("click", function(){randomize(8)});
}

function randomize(classNum){
	// if the random class button was clicked
    if (classNum == -1)
        classNum = getRandIntIncl(0,8);
    classEl.innerHTML = classList[classNum];
    
    // randomize three traitlines
    var tlineNum = [getRandIntIncl(0,4), getRandIntIncl(0,4), getRandIntIncl(0,6)];
	// cannot have more than one of the same traitline
    while (tlineNum[0] == tlineNum[1])
        tlineNum[1] = getRandIntIncl(0,4);
    while (tlineNum[0] == tlineNum[2] || tlineNum[1] == tlineNum[2])
        tlineNum[2] = getRandIntIncl(0,6);
	// randomize each trait
    var tNum = [getRandIntIncl(0,2), getRandIntIncl(3,5), getRandIntIncl(6,8),
                getRandIntIncl(0,2), getRandIntIncl(3,5), getRandIntIncl(6,8),
                getRandIntIncl(0,2), getRandIntIncl(3,5), getRandIntIncl(6,8)];
	// form a string from database entries to display in HTML page 
    var traitsElStr = "";
    for (var i = 0; i < 3; i++){
        traitsElStr += traitlines[classNum][tlineNum[i]] + ": ";
        for (var j = 0; j < 3; j++){
            traitsElStr += traits[classNum][tlineNum[i]][tNum[3*i+j]] + " (" + (tNum[3*i+j]%3+1) + ")";
            if (!((i == 0 && j == 2) || (i == 1 && j == 2)) && !(i == 2 && j == 2))
                traitsElStr += ", ";
            if ((i == 0 && j == 2) || (i == 1 && j == 2))
                traitsElStr += "<br>";
        }
    }
    traitsEl.innerHTML = traitsElStr;
    
    var utilNum;
    var petNum;
	// all classes other than revenant
    if (classNum != 8){
		// if an elite specialization was chosen
        if (tlineNum[2] == 5 || tlineNum[2] == 6){
            // randomize utility skills
			utilNum = [getRandIntIncl(0,4),
                       getRandIntIncl(5,28),getRandIntIncl(5,28),getRandIntIncl(5,28),
                       getRandIntIncl(29,32)];
			// cannot have more than one of the same utility
            while (utilNum[1] == utilNum[2])
                utilNum[2] = getRandIntIncl(5,28);
            while (utilNum[1] == utilNum[3] || utilNum[2] == utilNum[3])
                utilNum[3] = getRandIntIncl(5,28);
        } else {
            // core classes (non-elite specialization) have a smaller pool of skills to choose from
			utilNum = [getRandIntIncl(0,3),
                       getRandIntIncl(5,24),getRandIntIncl(5,24),getRandIntIncl(5,24),
                       getRandIntIncl(29,31)];
            while (utilNum[1] == utilNum[2])
                utilNum[2] = getRandIntIncl(5,24);
            while (utilNum[1] == utilNum[3] || utilNum[2] == utilNum[3])
                utilNum[3] = getRandIntIncl(5,24);
        }
		// form string from database
        var utilsElStr = "";
        for (var i = 0; i < 5; i++){
            if (utilNum[i] == 4 || utilNum[i] == 32 || utilNum[i] == 25 ||
                utilNum[i] == 26 || utilNum[i] == 27 || utilNum[i] == 28)
                if (tlineNum[2] == 5)
                    utilsElStr += skills[classNum][utilNum[i]][0];
                else 
                    utilsElStr += skills[classNum][utilNum[i]][1];
            else
                utilsElStr += skills[classNum][utilNum[i]];
            if (i < 4)
                utilsElStr += ", ";
        }
		// if this build is for a ranger, also give them pets
        if (classNum == 3){
            petNum = [getRandIntIncl(0,49),getRandIntIncl(0,49)];
            while (petNum[0] == petNum[1])
                petNum[1] = getRandIntIncl(0,49);
            utilsElStr += "<br>Pets: " + rangerPets[petNum[0]] + ", " + rangerPets[petNum[1]];
        }
        utilsEl.innerHTML = "Skills: " + utilsElStr;
    } else {
		// revenants have stances instead of utility skills
        if (tlineNum[2] == 5 || tlineNum[2] == 6){
            utilNum = [getRandIntIncl(0,4),getRandIntIncl(0,4)];
            while (utilNum[0] == utilNum[1])
                utilNum[1] = getRandIntIncl(0,4);
        } else {
            utilNum = [getRandIntIncl(0,3),getRandIntIncl(0,3)];
            while (utilNum[0] == utilNum[1])
                utilNum[1] = getRandIntIncl(0,3);
        }
        if (utilNum[0] == 4 && tlineNum[2]==5)
            utilsEl.innerHTML = "Stances: " + revStances[utilNum[0]][0] + ", " + revStances[utilNum[1]];
        else if (utilNum[0] == 4 && tlineNum[2] == 6)
            utilsEl.innerHTML = "Stances: " + revStances[utilNum[0]][1] + ", " + revStances[utilNum[1]];
        else if (utilNum[1] == 4 && tlineNum[2] == 5)
            utilsEl.innerHTML = "Stances: " + revStances[utilNum[0]] + ", " + revStances[utilNum[1]][0];
        else if (utilNum[1] == 4 && tlineNum[2] == 6)
            utilsEl.innerHTML = "Stances: " + revStances[utilNum[0]] + ", " + revStances[utilNum[1]][1];
        else
            utilsEl.innerHTML = "Stances: " + revStances[utilNum[0]] + ", " + revStances[utilNum[1]];
    }

	// randomize weapons based on what each class can use
    var mainhand1Num, mainhand2Num, offhand1Num, offhand2Num;
    var weapsElStr = "Weapons: ";
    if (classNum == 0){
        mainhand1Num = getRandIntIncl(0,7);
        while ((mainhand1Num == 6 && tlineNum[2] != 5) || (mainhand1Num == 7 && tlineNum[2] != 6))
            mainhand1Num = getRandIntIncl(0,7);
        weapsElStr += weapons[0][mainhand1Num];
        if (mainhand1Num < 3 || mainhand1Num == 7){
            offhand1Num = getRandIntIncl(8,10);
            weapsElStr += "/" + weapons[0][offhand1Num];
        }
        mainhand2Num = getRandIntIncl(0,7);
        while ((mainhand2Num == 6 && tlineNum[2] != 5) || (mainhand2Num == 7 && tlineNum[2] != 6))
            mainhand2Num = getRandIntIncl(0,7);
        weapsElStr += " and " + weapons[0][mainhand2Num];
        if (mainhand2Num < 3 || mainhand2Num == 7){
            offhand2Num = getRandIntIncl(8,10);
            weapsElStr += "/" + weapons[0][offhand2Num];
        }
    } else if (classNum == 1){
        mainhand1Num = getRandIntIncl(0,7);
        if (mainhand1Num == 7 && tlineNum[2] != 6)
            mainhand1Num = getRandIntIncl(0,6);
        weapsElStr += weapons[1][mainhand1Num];
        if (mainhand1Num < 3 || mainhand1Num == 7){
            offhand1Num = getRandIntIncl(8,14);
            while ((offhand1Num == 13 && tlineNum[2] != 5) || (offhand1Num == 14 && tlineNum[2] != 6))
                offhand1Num = getRandIntIncl(8,14);
            weapsElStr += "/" + weapons[1][offhand1Num];
        }
        mainhand2Num = getRandIntIncl(0,7);
        if (mainhand2Num == 7 && tlineNum[2] != 6)
            mainhand2Num = getRandIntIncl(0,6);
        weapsElStr += " and " + weapons[1][mainhand2Num];
        if (mainhand2Num < 3 || mainhand2Num == 7){
            offhand2Num = getRandIntIncl(8,10);
            while ((offhand2Num == 13 && tlineNum[2] != 5) || (offhand2Num == 14 && tlineNum[2] != 6))
                offhand2Num = getRandIntIncl(8,14);
            weapsElStr += "/" + weapons[1][offhand2Num];
        }
    } else if (classNum == 2){
        mainhand1Num = getRandIntIncl(0,3);
        while ((mainhand1Num == 2 && tlineNum[2] != 5) || (mainhand1Num == 3 && tlineNum[2] != 6))
            mainhand1Num = getRandIntIncl(0,3);
        weapsElStr += weapons[2][mainhand1Num];
        if (mainhand1Num == 0 || mainhand1Num == 3){
            offhand1Num = getRandIntIncl(4,5);
            weapsElStr += "/" + weapons[2][offhand1Num];
        }
    } else if (classNum == 3){
        mainhand1Num = getRandIntIncl(0,6);
        while ((mainhand1Num == 5 && tlineNum[2] != 5) || (mainhand1Num == 6 && tlineNum[2] != 6))
            mainhand1Num = getRandIntIncl(0,6);
        weapsElStr += weapons[3][mainhand1Num];
        if (mainhand1Num < 2 || mainhand1Num == 6){
            offhand1Num = getRandIntIncl(7,10);
            weapsElStr += "/" + weapons[3][offhand1Num];
        }
        mainhand2Num = getRandIntIncl(0,6);
        while ((mainhand2Num == 5 && tlineNum[2] != 5) || (mainhand2Num == 6 && tlineNum[2] != 6))
            mainhand2Num = getRandIntIncl(0,6);
        weapsElStr += " and " + weapons[3][mainhand2Num];
        if (mainhand2Num < 2 || mainhand2Num == 6){
            offhand2Num = getRandIntIncl(7,10);
            weapsElStr += "/" + weapons[3][offhand2Num];
        }
    } else if (classNum == 4){
        mainhand1Num = getRandIntIncl(0,5);
        while ((mainhand1Num == 4 && tlineNum[2] != 5) || (mainhand1Num == 5 && tlineNum[2] != 6))
            mainhand1Num = getRandIntIncl(0,5);
        weapsElStr += weapons[4][mainhand1Num];
        if (mainhand1Num < 3){
            offhand1Num = getRandIntIncl(6,7);
            weapsElStr += "/" + weapons[4][offhand1Num];
        }
        mainhand2Num = getRandIntIncl(0,5);
        while ((mainhand2Num == 4 && tlineNum[2] != 5) || (mainhand2Num == 5 && tlineNum[2] != 6))
            mainhand2Num = getRandIntIncl(0,5);
        weapsElStr += " and " + weapons[4][mainhand2Num];
        if (mainhand2Num < 3){
            offhand2Num = getRandIntIncl(6,7);
            weapsElStr += "/" + weapons[4][offhand2Num];
        }
    } else if (classNum == 5){
        mainhand1Num = getRandIntIncl(0,3);
        if (mainhand1Num == 3 && tlineNum[2] != 6)
            mainhand1Num = getRandIntIncl(0,2);
        weapsElStr += weapons[5][mainhand1Num];
        if (mainhand1Num < 2 || mainhand1Num == 3){
            offhand1Num = getRandIntIncl(4,6);
            if (offhand1Num == 6 && tlineNum[2] != 5)
                offhand1Num = getRandIntIncl(4,5);
            weapsElStr += "/" + weapons[5][offhand1Num];
        }
    } else if (classNum == 6){
        mainhand1Num = getRandIntIncl(0,4);
        if (mainhand1Num == 4 && tlineNum[2] != 6)
            mainhand1Num = getRandIntIncl(0,3);
        weapsElStr += weapons[6][mainhand1Num];
        if (mainhand1Num < 2 || mainhand1Num == 4){
            offhand1Num = getRandIntIncl(5,9);
            if (offhand1Num == 9 && tlineNum[2] != 5)
                offhand1Num = getRandIntIncl(5,8);
            weapsElStr += "/" + weapons[6][offhand1Num];
        }
        mainhand2Num = getRandIntIncl(0,4);
        if (mainhand2Num == 4 && tlineNum[2] != 6)
            mainhand2Num = getRandIntIncl(0,3);
        weapsElStr += " and " + weapons[6][mainhand2Num];
        if (mainhand2Num < 2 || mainhand2Num == 4){
            offhand2Num = getRandIntIncl(5,9);
            if (offhand2Num == 9 && tlineNum[2] != 5)
                offhand2Num = getRandIntIncl(5,8);
            weapsElStr += "/" + weapons[6][offhand2Num];
        }
    } else if (classNum == 7){
        mainhand1Num = getRandIntIncl(0,4);
        if (mainhand1Num == 4 && tlineNum[2] != 5)
            mainhand1Num = getRandIntIncl(0,3);
        weapsElStr += weapons[7][mainhand1Num];
        if (mainhand1Num < 3){
            offhand1Num = getRandIntIncl(5,8);
            if (offhand1Num == 8 && tlineNum[2] != 6)
                offhand1Num = getRandIntIncl(5,7);
            weapsElStr += "/" + weapons[7][offhand1Num];
        }
        mainhand2Num = getRandIntIncl(0,4);
        if (mainhand2Num == 4 && tlineNum[2] != 5)
            mainhand2Num = getRandIntIncl(0,3);
        weapsElStr += " and " + weapons[7][mainhand2Num];
        if (mainhand2Num < 3){
            offhand2Num = getRandIntIncl(5,8);
            if (offhand2Num == 8 && tlineNum[2] != 6)
                offhand2Num = getRandIntIncl(5,7);
            weapsElStr += "/" + weapons[7][offhand2Num];
        }
    } else if (classNum == 8){
        mainhand1Num = getRandIntIncl(0,4);
        if (mainhand1Num == 4 && tlineNum[2] != 6)
            mainhand1Num = getRandIntIncl(0,3);
        weapsElStr += weapons[8][mainhand1Num];
        if (mainhand1Num < 2){
            offhand1Num = getRandIntIncl(5,7);
            if (offhand1Num == 7 && tlineNum[2] != 5)
                offhand1Num = getRandIntIncl(5,6);
            weapsElStr += "/" + weapons[8][offhand1Num];
        }
        mainhand2Num = getRandIntIncl(0,4);
        if (mainhand2Num == 4 && tlineNum[2] != 6)
            mainhand2Num = getRandIntIncl(0,3);
        weapsElStr += " and " + weapons[8][mainhand2Num];
        if (mainhand2Num < 2){
            offhand2Num = getRandIntIncl(5,7);
            if (offhand2Num == 7 && tlineNum[2] != 5)
                offhand2Num = getRandIntIncl(5,6);
            weapsElStr += "/" + weapons[8][offhand2Num];
        }
    }
    weapsEl.innerHTML = weapsElStr;
    
	// randomize gear
    var amuSigRuneElStr = "";
    if (classNum == 2 || classNum == 5){
        var sigNum = [getRandIntIncl(0,27), getRandIntIncl(0,27)];
        while (sigNum[0] == sigNum[1])
            sigNum[1] = getRandIntIncl(0,27);
        amuSigRuneElStr += "Sigils of: " + sigils[sigNum[0]] + "/" + sigils[sigNum[1]] + "<br>";
    }
    else {
        var sigNum = [getRandIntIncl(0,27), getRandIntIncl(0,27),
            getRandIntIncl(0,27), getRandIntIncl(0,27)];
        while (sigNum[0] == sigNum[1])
            sigNum[1] = getRandIntIncl(0,27);
        while (sigNum[2] == sigNum[3])
            sigNum[3] = getRandIntIncl(0,27);
        amuSigRuneElStr += "Sigils of: " + sigils[sigNum[0]] + "/" + sigils[sigNum[1]] + " and " + sigils[sigNum[2]] + "/" + sigils[sigNum[3]] + "<br>";
    }

    var amuNum = getRandIntIncl(0,28);
    var runeNum = getRandIntIncl(0,74);
    
    amuSigRuneElStr += amulets[amuNum] + " Amulet" + "<br>Rune of " + runes[runeNum];
    amuSigRuneEl.innerHTML = amuSigRuneElStr;
}

// From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandIntIncl(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}