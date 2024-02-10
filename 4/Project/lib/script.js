// Add your code here

// Galeri div'ini seç
const gallery = document.getElementById('gallery');

// Galeri içine rasgele resim ekleyen fonksiyon
function updateGallery() {
    gallery.innerHTML = '';

    for (let i = 0; i < 15; i++) {
        const imageUrl = `https://source.unsplash.com/random/200x200?sig=${i}`;
        gallery.innerHTML += `<img src="${imageUrl}" alt="Random Image ${i + 1}">`;
    }
}

// Sayfa yüklendiğinde ve her yenilendiğinde galeriyi güncelle
document.addEventListener('DOMContentLoaded', updateGallery);
window.addEventListener('load', updateGallery);