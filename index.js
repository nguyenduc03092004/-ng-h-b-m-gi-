let start = document.querySelector(`.start`)
let stopp = document.querySelector(`.stop`)
let resert = document.querySelector(`.resert`)
let time = document.querySelector(`.time`)
let newtimeMS = 0;
let newtimes = 0;
let isStart = false;

start.onclick = () => {
    if (!isStart) {
        console.log(`start`)
        starttime = setInterval(function () {
            newtimeMS++;

            if (newtimeMS > 99) {
                newtimes++;
                newtimeMS = 0;
            }
            if (newtimes == 60) {
                newtimeMS = 0;
                newtimes = 0;
            }

            time.textContent = `${newtimes} : ${newtimeMS}`
        }, 10)
        isStart = true
    }
}

stopp.onclick = () => {
    console.log(`stop`)
    clearInterval(starttime)
    isStart = false
}
resert.onclick = () => {
    console.log(`resert`)
    newtimeMS = 0;
    newtimes = 0;
    clearInterval(starttime)
    time.textContent = `${newtimes} : ${newtimeMS}`
    isStart = false
}











