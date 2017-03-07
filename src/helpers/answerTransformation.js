export const charactersTransform = (answer) => {
    let objArray = [];
    for (let i =0; i < answer.length; i++) {
        objArray.push({ id: i, name: answer[i]});
    }

    return objArray;
};

export const randomizeItem = (array) => {

    let randomIndex, tempVal;

    for (let i = array.length - 1; i > 0; i--) {
        randomIndex = Math.floor(Math.random() * (i + 1));

        tempVal = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = tempVal;
    }

    return array;
};