function count() {
    let a = parseInt(document.getElementById('soa').value);
    let b = parseInt(document.getElementById('sob').value);

    let chuvi = a * 4;
    let dientich = a * a;
    let tong = 0;
    
    // document.getElementById('chuvi').innerHTML = 'chu vi =' + chuvi;
    // document.getElementById('dientich').innerHTML = 'dien tich =' + dientich;
    // document.getElementById('canha').innerHTML = 'do dai canh a =' + a;

    for (i = a; i <= b; i++) {
        tong += i;
    }
    document.getElementById('tongab').innerHTML = 'tong tu a den b =' + tong;

}

count()