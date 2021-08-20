const timeNodes = document.querySelectorAll("[data-time]");

// const seconds = [...timeNodes]
//     .map(item => item.dataset.time)
//     .map(item => Number(item.split(":")[0] * 60) + Number(item.split(":")[1]))
//     .reduce((acc, cur) => acc + cur, 0);
//

const seconds = [...timeNodes].reduce((acc, curr) => {
    const [mins, secs] = curr.dataset.time.split(":").map(Number);
    return acc + mins * 60 + secs;
  }, 0)

const mins = Math.floor(seconds / 60);
const hours = Math.floor(mins / 60);

console.log(`Total ${seconds} seconds.`);
console.log(`Duration - ${hours}:${mins % 60}:${seconds % 60} hours`);
