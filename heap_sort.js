let maxHeapify = function (array) {
    let arrayLength= array.length,
        parent = Math.floor(arrayLength / 2);

    while(parent > -1) {
        array = sinkDown(array, parent);
        parent--;
    }

    console.log(array);
    return array;
}

let sinkDown = function (array, parent, lastArrayItem) {

    let left = 2 * parent + 1, right = 2 * parent + 2, tmp;

    lastArrayItem = lastArrayItem || array.length;

    if (array[parent] < array[left] && left < lastArrayItem) {
        tmp = array[left];
        array[left] = array[parent];
        array[parent] = tmp;

        array = sinkDown(array, left, lastArrayItem);
    }

    if (array[parent] < array[right] && right < lastArrayItem) {
        tmp = array[right];
        array[right] = array[parent];
        array[parent] = tmp;

        array = sinkDown(array, right, lastArrayItem);
    }

    return array;
};


let heapSort = function (array) {
    let lastArrayItem = array.length - 1, tmp;

    array = maxHeapify(array);

    while (lastArrayItem !== 0) {

        tmp = array[lastArrayItem];
        array[lastArrayItem] = array[0];
        array[0] = tmp;

        array = sinkDown(array, 0, lastArrayItem);

        lastArrayItem--;

    }
    return array;
}

//console.log(maxHeapify([1,2,7,8,11,5,16,20,50,30,12]));
//console.log(maxHeapify([1,2,3,17,19,36,7,25,100]));
console.log(heapSort([1,2,3,17,19,36,7,25,100]))