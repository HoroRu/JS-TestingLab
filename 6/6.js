function count() {
    let n = document.getElementById('number').value;
    a = [1, 1, 1, n];
    if (a[1] === a[2]) {
        if (a[1] === a[3]) {
            alert(a[4]);
        }
        else {
            alert(a[3]);
        }
    }
    else {
        if (a[1] === a[4]) {
            alert(a[2])
        }
        else {
            alert(a[1]);
        }
    };
};