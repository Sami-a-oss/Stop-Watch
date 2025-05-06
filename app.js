const count = document.querySelector('#count');
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let timer = null;

let [second, minute, hour] = [0, 0, 0];

const stopWatch = () => {
  second++;
  if(second == 60) {
    second = 0;
    minute++;
    if(minute == 60) {
      minute = 0;
      hour++;
    }
  }
  let h = hour < 10 ? "0"+ hour : hour;
  let m = minute < 10 ? "0" + minute : minute;
  let s = second < 10 ? "0" + second : second;
  count.innerText = `${h} : ${m} : ${s}`;
}

start.addEventListener("click", () => {
  if(timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
})

stop.addEventListener("click", () => {
  clearInterval(timer);
});

reset.addEventListener("click", () => {
  clearInterval(timer);
  [second, minute, hour] = [0, 0, 0];
  count.innerText = "00 : 00 : 00";
})
