let displayScreen = document.querySelector(`.display-screen`)
let sum = document.querySelector(`.sum`)
let sub = document.querySelector(`.sub`)
let multi = document.querySelector(`.multi`)
let divi = document.querySelector(`.divi`)
let mot = document.querySelector(`.mot`)
let hai = document.querySelector(`.hai`)
let ba = document.querySelector(`.ba`)
let bon = document.querySelector(`.bon`)
let nam = document.querySelector(`.nam`)
let sau = document.querySelector(`.sau`)
let bay = document.querySelector(`.bay`)
let tam = document.querySelector(`.tam`)
let chin = document.querySelector(`.chin`)
let khong = document.querySelector(`.khong`)
let cham = document.querySelector(`.cham`)
let C = document.querySelector(`.C`)
let result = undefined;
let check = 0;
let bang = document.querySelector(`.bang`)
addMath = function (value) {
    displayScreen.textContent += `${value.textContent}`
}
sum.onclick = () => {
    check = 0
    addMath(sum)
};
sub.onclick = () => {
    check = 0
    addMath(sub)
};
multi.onclick = () => {
    check = 0
    addMath(multi)
};
divi.onclick = () => {
    check = 0
    addMath(divi)
};
mot.onclick = () => {
    check = 0
    addMath(mot)
};
hai.onclick = () => {
    check = 0
    addMath(hai)
};
ba.onclick = () => {
    check = 0
    addMath(ba)
};
bon.onclick = () => {
    check = 0
    addMath(bon)
};
nam.onclick = () => {
    check = 0
    addMath(nam)
};
sau.onclick = () => {
    check = 0
    addMath(sau)
};
bay.onclick = () => {
    check = 0
    addMath(bay)
};
tam.onclick = () => {
    check = 0
    addMath(tam)
};
chin.onclick = () => {
    check = 0
    addMath(chin)
};
khong.onclick = () => {
    check = 0
    addMath(khong)
};
cham.onclick = () => {
    check = 0
    addMath(cham)
};
C.onclick = () => {
    check = 0
    addMath(C)
};
bang.onclick = () => {
    check++;
    if (check == 1) {
        result = eval(displayScreen.textContent);
        displayScreen.textContent = result;
    }
    else {
        displayScreen.textContent = ` `
    }

}