
document.addEventListener("DOMContentLoaded", function() {
    const imgBox = document.getElementById("imgBox");
    const qrImage = document.getElementById("qrImage");
    const qrText = document.getElementById("qrText");
    const generateBtn = document.getElementById("generateBtn");

    function generateQR() {
        if (qrText.value.trim() !== '') {
            const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText.value)}`;
            qrImage.src = qrCodeUrl;
            imgBox.classList.add("show-img");
        } else {
            qrText.classList.add('error');
            setTimeout(() => {
                qrText.classList.remove('error');
            }, 1000);
        }
    }

    generateBtn.addEventListener('click', generateQR);
});
