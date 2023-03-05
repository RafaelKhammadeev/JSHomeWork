const randomShuffle = () => {
    const number = Math.random()
    if (number > 0.5) return 1;
    if (number <= 0.5) return -1;
}

const arr = [2, 11, 37, 42];
arr.sort(randomShuffle)
console.log(arr)


