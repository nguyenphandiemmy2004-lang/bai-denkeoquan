// Chờ cho toàn bộ giao diện HTML tải xong rồi mới chạy JS
document.addEventListener('DOMContentLoaded', () => {
    const lamp = document.getElementById('lamp');

    if (lamp) {
        // Khi di chuột vào chiếc đèn -> Thêm class paused để dừng chuyển động
        lamp.addEventListener('mouseenter', () => {
            lamp.classList.add('paused');
        });

        // Khi di chuột ra ngoài chiếc đèn -> Xóa class paused để quay tiếp tục
        lamp.addEventListener('mouseleave', () => {
            lamp.classList.remove('paused');
        });
    }
});
