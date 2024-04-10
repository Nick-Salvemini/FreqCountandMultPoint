// add whatever parameters you deem necessary
function countPairs(arr, target) {
    const seen = new Set();
    let count = 0;

    for (let num of arr) {
        if (seen.has(target - num)) {
            count++
        }
        seen.add(num);
    }
    return count
}
