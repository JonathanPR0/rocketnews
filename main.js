const btn = document.querySelector('.btn');
const shippingAlert = document.querySelector('.shippingAlert');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  shippingAlert.classList.toggle('active');
  setTimeout(() => {
    shippingAlert.classList.toggle('active');
  }, 5000);
});
