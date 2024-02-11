// Inside the script tag
document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');

  gallery.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
      const imgSrc = event.target.src;
      modalImage.src = imgSrc;
      modal.style.display = 'block';
    }
  });

  modal.addEventListener('click', function () {
    modal.style.display = 'none';
  });
});
