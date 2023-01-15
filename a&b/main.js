
function tinhtong() {
    let a = parseInt(document.getElementById('soa').value);
    let b = parseInt(document.getElementById('sob').value);
    let arr = new Array();
    let tong = 0;
    let tong5 = 0;
    let tong7 = 0
    let j = 0;
    
    for (i = a; i <= b; i++) {
        arr[j] = i;
        tong += i;
        if (i % 5 === 0) {
            tong5 += i;
        // } else {i % 7 === 0} {
        //     document.write(i + '-')
        // }
        j++;
    }
    document.getElementById('tong').innerHTML = arr + "co tong" + tong;
    document.getElementById('tong5').innerHTML = arr + "co tong cac so chia 5 la :" + tong5;

}

tinhtong()