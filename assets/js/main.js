const hasil = document.querySelector("#hasil");
const resultText = document.querySelector("#resultText");

function validation() {
    const tm = parseFloat(document.querySelector("#tm").value);
    const wrsi = parseFloat(document.querySelector("#wrsi").value);
    const twr = parseFloat(document.querySelector("#twr").value);

    const resultNum = rumus(tm, wrsi, twr);
    const loseNum = rumusLose(tm, wrsi, twr);

    let text = "";
    if (isNaN(tm) || isNaN(wrsi) || isNaN(twr)) {
        text = `formnya isi duluuu mass...`;
        display(text);
    } else if (tm < 0 || wrsi < 0 || twr < 0) {
        text = `isian gak boleh minus yaaa ...`;
        display(text);
    } else if (tm % 1 != 0) {
        text = `total match-nya isi bilangan bulat der ...`;
        display(text);
    } else if (wrsi == 100 && twr == 100) {
        text = `kamu <b>gaboleh kalah</b> untuk pertahanin wrnya`;
        display(text);
    } else if (twr > 100 || wrsi > 100) {
        text = `winrate max-nya 100% cuy ... `;
        display(text);
    } else if (wrsi > twr) {
        text = `Anda butuh <b>${loseNum}</b> lose tanpa win lagi, untuk dapat win rate <b>${twr}%</b>`;
        display(text);
    } else if (tm == 0 && wrsi == 0 && twr == 100) {
        text = `Anda butuh <b>1</b> win tanpa lose lagi, untuk dapat win rate <b>${twr}%</b>`;
        display(text);
    } else if (twr == 100) {
        text = `wr gabisa 100% lagi yaa kalo udah pernah kalah sekali`;
        display(text);
    } else if (resultNum >= 100000) {
        text = `Anda butuh lebih dari <b>100.000</b> win tanpa lose lagi untuk dapat win rate <b>${twr}%</b>`;
        display(text);
    } else {
        text = `Anda butuh <b>${resultNum}</b> win tanpa lose lagi, untuk mendapatkan win rate <b>${twr}%</b>`;
        display(text);
    }
}

function display(text) {
    return resultText.innerHTML = text;
}

function rumus(tm, wrsi, twr) {
    let tWin = tm * (wrsi / 100);
    let tLose = tm - tWin;
    let sisaWr = 100 - twr;
    let wrResult = 100 / sisaWr;
    let seratusPersen = tLose * wrResult;
    let final = seratusPersen - tm;
    return Math.round(final);
}

function rumusLose(tm, wrsi, twr) {
    let totalWin = (tm * wrsi) / 100;
    let win = (totalWin / (twr / 100)) - tm;
    return Math.round(win);
}

// Main
window.addEventListener("load", init);

function init() {
    load();
    eventListener();
}

function load() {
    checkLS();
}

function eventListener() {
    hasil.addEventListener("click", res);
} 

function checkLS() {
    if (localStorage.getItem('cookies') === null) {
        localStorage.setItem('cookies', 0);
    }
}
function res() {
    validation();
}






