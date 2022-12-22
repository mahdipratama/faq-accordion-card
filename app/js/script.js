const questionButtons = document.querySelectorAll('button');


questionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const chevron = button.children[1];

    answer.classList.toggle('show');
    chevron.classList.toggle('rotate');

  });
});