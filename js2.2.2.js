function getMiddle(s) {
    if (s.length % 2 !== 0) {
        var mid = Math.floor(s.length / 2);
        return s.slice(mid, mid + 1);
    }
    else {
        var mid = s.length / 2;
        return s.slice(mid - 1, mid + 1);
    }
}