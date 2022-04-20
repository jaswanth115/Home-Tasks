function getMiddle(num) {
    if (num.length % 2 !== 0) {
        var mid = Math.floor(num.length / 2);
        return num.slice(mid, mid + 1);
    }
    else {
        var mid = num.length / 2;
        return num.slice(mid - 1, mid + 1);
    }
}