export const charactersTransform = (answer) => {
    let objArray = [];
    for (let i =0; i < answer.length; i++) {
        objArray.push({ id: i, name: answer[i]});
    }

    return objArray;
};