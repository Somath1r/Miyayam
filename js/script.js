document.addEventListener('DOMContentLoaded', function () {
    console.log('Website Miyayam Legenda berhasil dimuat!');

    // Otomatis menutup menu navbar di HP setelah link diklik
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');

    if (menuToggle) {
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                let bsCollapse = bootstrap.Collapse.getInstance(menuToggle);
                if (!bsCollapse) {
                    bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
                }
                if (menuToggle.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });
    }
});

// Fungsi pop-up pesanan
function pesanMenu(namaMenu) {
    alert(`Terima kasih! Pesanan untuk "${namaMenu}" telah dicatat. Silakan hubungi kasir atau WhatsApp kami untuk konfirmasi.`);
}