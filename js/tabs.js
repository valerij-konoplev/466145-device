var tabsContainer = document.querySelector('.features-controls'),
tabsLinks = tabsContainer.querySelectorAll('.btn'),
tabsContents = document.querySelectorAll('.features-description');

// спрятать все таб контенты кроме первого
document.querySelectorAll('.features-description:not(:first-of-type)').forEach(function(tabContent) {
  tabContent.style.display = 'none';
});

// к каждому таб линку и таб контенту добавить одинаковый дата аттрибут
for (var i = 0; i < tabsLinks.length; i++) {
  tabsLinks[i].setAttribute('data-tab', i);
  tabsContents[i].setAttribute('data-tab', i);
}

// клик на табе
tabsContainer.onclick = function(e) {
  if (!e.target.classList.contains('btn')) return;
  // удалить со всех класс активного элемента
  tabsLinks.forEach(function(link) {
    link.classList.remove('active');
  });
  // пометить элемент как активный
  e.target.classList.add('active');
  // скрыть все таб контенты
  tabsContents.forEach(function(tabContent) {
    tabContent.style.display = 'none';
  });
  // сверить дата атрибуты, показать подходящий таб контент
  tabsContents.forEach(function(tabContent) {
    if (tabContent.dataset.tab === e.target.dataset.tab) {
      tabContent.style.display = 'block';
    }
  });
};
