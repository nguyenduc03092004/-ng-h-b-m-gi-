
let time = document.querySelector(`.time`)
setInterval(() => {
    const now = new Date();

    // Lấy giờ, phút, giây hiện tại
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // Hiển thị thời gian lên giao diện
    time.textContent = `${hour}:${minute}:${second} AM`;
}, 1000)
