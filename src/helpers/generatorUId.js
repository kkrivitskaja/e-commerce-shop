const generatorUId = () => {
    let array = new Uint32Array(8);
    window.crypto.getRandomValues(array);
    let string = '';
    for (let i = 0; i < array.length; i++) {
        string += (i < 2 || i > 5 ? '' : '-') + array[i].toString(16).slice(-4);
    }
    return string;
};

export default generatorUId;
