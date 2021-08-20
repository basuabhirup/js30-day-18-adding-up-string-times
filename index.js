const timeNodes = document.querySelectorAll("[data-time]");

const seconds = [...timeNodes]
    .map(item => item.dataset.time)
    .map(item => Number(item.split(":")[0] * 60) + Number(item.split(":")[1]))
    .reduce((acc, cur) => acc + cur, 0);

const mins = Math.floor(seconds / 60);
const hours = Math.floor(mins / 60);

console.log(seconds);
console.log(`${hours}:${mins % 60}:${seconds % 60} Hrs`);
