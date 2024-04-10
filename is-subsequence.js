// add whatever parameters you deem necessary
function isSubsequence(subStr, str) {
    let i = 0;
    let j = 0;
    
    if (!subStr) return true;

    while (j < str.length){
        if (str[j] === subStr[i]) i++;
        if (i === subStr.length) return true;
        j++
    }

    return false
}
