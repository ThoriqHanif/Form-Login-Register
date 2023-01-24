function warna() {
    warna1 = document.getElementById('warna1').value;
    warna2 = document.getElementById('warna2').value;
    warna3 = document.getElementById('warna3').value;
    localStorage.setItem('warna1',warna1);
    localStorage.setItem('warna2',warna2);
    localStorage.setItem('warna3',warna3);
    document.getElementsByTagName('body')[0].style.background = "linear-gradient(to left top, " + warna1+", "+warna2+", "+warna3+")";
}

if(localStorage.warna1){
    document.getElementsByTagName('body')[0].style.background = "linear-gradient(to left top, " + localStorage.warna1+", " + localStorage.warna2+",  " + localStorage.warna3+")";
    document.getElementById('warna1').value = localStorage.warna1;
    document.getElementById('warna2').value = localStorage.warna2;
    document.getElementById('warna3').value = localStorage.warna3;
}
