const footer = document.querySelector('footer');
const button = document.getElementById('share');
const profile = document.getElementById('profile-toggle');
const share = document.getElementById('share-toggle');

button.addEventListener('click', () => {
    if(window.innerWidth < 600) {
        profile.classList.toggle('toggle');
         footer.classList.toggle('footer-dark-bg');
        footer.classList.toggle('footer-rad');
    }
  
    share.classList.toggle('toggle');
    button.classList.toggle('share-dark');
});