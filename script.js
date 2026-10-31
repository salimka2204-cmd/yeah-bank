// Функция переключения страниц без перезагрузки
function showPage(pageId) {
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active-page');
    });

    let targetPage = pageId === 'home' ? document.getElementById('home') : document.getElementById(pageId + '-page');

    if (targetPage) {
        targetPage.classList.add('active-page');
    }

    // Закрываем мобильное меню при клике на пункт
    let navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Функция для открытия/закрытия меню "три полоски" на телефоне
function toggleMenu() {
    let navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

// Уведомление для кнопок
function showAlert(message) {
    alert("yeah bank: " + message);
}
