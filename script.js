
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar_ID");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 

// When user clicks on various buttons, the page scrolls down to the appropriate information
let homeButton = document.getElementById('home');
let homePage = document.getElementById('homePage');
homeButton.addEventListener('click', function() {
  homePage.scrollIntoView({behavior: "smooth"});
})

let aboutButton = document.getElementById('about');
let aboutPage = document.getElementById('aboutPage');
aboutButton.addEventListener('click', function() {
  aboutPage.scrollIntoView({behavior: "smooth"});
})

let contactButton = document.getElementById('contact');
let contactBox = document.getElementsByClassName('bottomBox');
contactButton.addEventListener('click', function() {
  contactBox[0].scrollIntoView({behavior: "smooth"});
})
