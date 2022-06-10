function isArray(col) {
    let newArr;
    if(Array.isArray(col)){
        newArr = col;
    } else {
        newArr = Object.values(col);
    }
    return newArr;
}

function myEach(col, cb){
    let newArr = isArray(col);
    for (let i = 0; i < newArr.length; i++){   
        cb(newArr[i]);
    }
    return col;
}

function myMap(col, cb) {
    let newArr = isArray(col);
    const anuda = [];
    for (let i = 0; i < newArr.length; i++) {
        let final = cb(newArr[i])
        anuda.push(final);
    }
    return anuda;
}

function myReduce(col, cb, acc) {
    let newArr = isArray(col);
    if (acc === undefined) {
        acc =newArr[0];
        for(let i = 1; i < newArr.length; i++) {
            acc = cb(acc, newArr[i], col);
        }
    } else {
        for(let i = 0; i < newArr.length; i++) {
            acc = cb(acc, newArr[i], col);
        }
    }
    return acc;
}

function myFind(col, predicate) {
    let newArr = isArray(col);
    let answer;
    for (let i = 0; i < newArr.length; i++) {
        if (predicate(col[i])) {
            answer = col[i];
            return answer;
        }
    }
    return answer;
}

function myFilter(col, pred) {
    let newArr = isArray(col);
    let finArr = [];
    for (let i = 0; i < newArr.length; i++) {
        if (pred(col[i])) {
            finArr.push(col[i]);
        }
    }
    return finArr;
  }

function mySize(col) {
    let newArr = isArray(col);
    return newArr.length;
}
  
function myFirst(arr, n) {
    if (n === undefined) {
        return arr[0];
    } else if (arr.length > 1) {
        return arr.splice(0, n);
    }
}

function myLast(arr, n) {
    let copy = arr.slice();
    if (n === undefined) {
        return copy.pop();
    } else {
      return copy.slice(-n);
    }
}

function myKeys(obj) {
    let answer = Object.keys(obj);
    return answer;
}
  
function myValues(obj) {
    let answer = Object.values(obj);
    return answer;
}
