document.getElementById('render').addEventListener('click', (e) => {
    e.preventDefault();
    let a = document.getElementById('floatingTextarea').value;
    alert(a);
    var typeNumber = 0;
    var errorCorrectionLevel = 'H';
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(a);
    qr.make();
    let qrrender=qr.createDataURL(8,1)
    document.getElementById('qr').src =qrrender;
    document.getElementById('download').href =qrrender;
    document.getElementById('download').style = "display:block;background-color:black;margin:10px;border-color:black;"
})