"use strict";

const openMenu = document.querySelector(".active");
const menuIcon = document.querySelector(".hamburger-menu");
const mobilenav = document.querySelector(".divham");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("active");
  mobilenav.classList.toggle("show");
});

function searchKeyword() {
  // Clear previous highlights
  const highlightedElements = document.querySelectorAll('.highlight');
  highlightedElements.forEach(element => {
      element.classList.remove('highlight');
  });

  const input = document.getElementById('input-search').value.toLowerCase();
  const content = document.getElementById('content');
  const paragraphs = content.getElementsByTagName('p');

  let found = false;
  for (let paragraph of paragraphs) {
      if (paragraph.innerText.toLowerCase().includes(input)) {
          paragraph.classList.add('highlight');
          paragraph.scrollIntoView({ behavior: 'smooth' });
          found = true;
          break;
      }
  }

  if (!found) {
      alert('Keyword not found!');
  }
}