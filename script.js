let inputdate = document.querySelector("#inputdate");
let resulte = document.querySelector("#output");
let btn = document.querySelector("#btn");
inputdate.max = new Date().toISOString().split("T")[0];


btn.addEventListener("click", function () {

    let birthdate = new Date(inputdate.value);

    let m1 = birthdate.getMonth() + 1;
    let d1 = birthdate.getDate();
    let y1 = birthdate.getFullYear();

    let nowdate = new Date();

    let y2 = nowdate.getFullYear();
    let m2 = nowdate.getMonth() + 1;
    let d2 = nowdate.getDate();
    let y3, m3, d3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    }
    else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    }
    else {
        m3--;
        d3 = getDaysInMonth(y1, m1);
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    resulte.innerHTML = `You are ${y3} year , ${m3} month and ${d3} days old.`;

})


function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
