// Seleciona o botão de menu (hambúrguer) e o menu de navegação
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('navMenu');

// Função para alternar o menu
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});