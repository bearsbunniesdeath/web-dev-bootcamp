function printReverse(arr) {
    for(var i = arr.length - 1; i>=0; i--) {
        console.log(arr[i]);
    }
}

function isUniform(arr) {
    var firstItem = arr[0];

    for(var i = 1; i < arr.length; i++) {
        if (arr[i] !== firstItem) {
            return false;
        }
    }

    return true;
}

function sumArray(arr) {
    var sum = 0;

    arr.forEach(element => {
        sum += element;
    })

    return sum;
}

function max(arr) {
    var max = arr[0];

    for(var i = 1; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}