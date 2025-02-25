// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    const result = {};

    keys.forEach((key, index) => {
        result[key] = index < values.length ? values[index] : null
    });

    return result
}
