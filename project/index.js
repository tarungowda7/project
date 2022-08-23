const navbar = document.querySelector('.navbar');
const links = navbar.querySelectorAll('a');
const home = document.querySelector('.home');
const work = document.querySelector('.work');
const contact = document.querySelector('.contact');

/* Add event handlers that will display only the selected section when someone clicks on the associated link */
links.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault;
    let lastActiveLink = document.querySelector('.active');
    lastActiveLink.classList.remove('active'); // remove the focus
    this.classList.add('active'); // Make the clicked link active

    if (this.getAttribute('href') === '#home') {
        home.style.display = 'flex';
      work.style.display = 'none';
      contact.style.display = 'none';
    }

    if (this.getAttribute('href') === '#work') {
      home.style.display = 'none';
      contact.style.display = 'none';
      work.style.display = 'flex';
    }

    if (this.getAttribute('href') === '#contact') {
      work.style.display = 'none';
      home.style.display = 'none';
      contact.style.display = 'flex';
    }
  });
});
