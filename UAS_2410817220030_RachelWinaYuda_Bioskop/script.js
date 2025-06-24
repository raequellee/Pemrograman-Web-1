function showPage(pageId, navElement) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }
    
    const navLinks = document.querySelectorAll('#menu a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    if (navElement) {
        navElement.classList.add('active');
    }
}

function hitungTotal() {
    const jumlahTiket = document.getElementById('jumlah').value || 0;
    const hargaSatuan = document.getElementById('hargaSatuan').value;
    const total = jumlahTiket * hargaSatuan;
    
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency', currency: 'IDR', minimumFractionDigits: 0
    });
    document.getElementById('totalBayar').innerText = formatter.format(total);
}

function validasiPesan() {
    const film = document.forms["formPesan"]["film"].value;
    const nama = document.forms["formPesan"]["nama"].value;
    const email = document.forms["formPesan"]["email"].value;
    const jumlah = document.forms["formPesan"]["jumlah"].value;

    if (film === "" || nama === "" || email === "" || jumlah === "" || jumlah < 1) {
        alert("Semua kolom wajib diisi dengan benar.");
        return false; 
    }
    alert("Pemesanan atas nama " + nama + " berhasil dikirim! Detail akan dikirim ke email " + email + ".");
    document.forms["formPesan"].reset(); 
    hitungTotal(); 
    return false; 
}

function validasiKritik() {
    const nama = document.forms["formKritik"]["namaKritik"].value;
    const email = document.forms["formKritik"]["emailKritik"].value;
    const pesan = document.forms["formKritik"]["pesanKritik"].value;

    if (nama === "" || email === "" || pesan === "") {
        alert("Nama, email, dan pesan tidak boleh kosong.");
        return false;
    }
    alert("Terima kasih, " + nama + "! Masukan Anda sangat berharga bagi kami.");
    document.forms["formKritik"].reset(); 
    return false; 
}

document.addEventListener('DOMContentLoaded', (event) => {
    showPage('beranda', document.getElementById('nav-beranda'));
    hitungTotal(); 
});