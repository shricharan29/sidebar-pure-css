function expand() {
    var bar = document.getElementById('sidebar');
    var content = document.getElementById('content');
    var btn = document.getElementById('hamburger');
    var footer = document.getElementsByTagName('footer');
    if (bar.style.display == 'flex') {
        content.style.marginLeft = '20px';
        btn.innerText = '☰';
        bar.style.display = 'none';
        footer[0].style.marginLeft = '0px';
        footer[0].style.width = 'calc(100% - 40px)';
    } else {
        bar.style.display = 'flex';
        btn.innerText = '✕';
        content.style.marginLeft = '200px';
        footer[0].style.marginLeft = '180px';
        footer[0].style.width = 'calc(100% - 180px - 40px)';
    }
}