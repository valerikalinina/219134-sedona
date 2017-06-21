function initMap() {
  var mapWraper = document.querySelector('.map');
  //mapWraper.classList.remove('map--default');
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map")
  var myMap = new ymaps.Map('map', {
    // При инициализации карты, обязательно нужно указать
    // ее центр и коэффициент масштабирования
    center: [34.865966, -111.763806], // Санкт-Петербург
    zoom: 16
  }, { maxZoom: 18, minZoom: 11 });

  // Включим масштабирование колесом мыши
  myMap.behaviors.enable('scrollZoom');

  // Создание метки
  var myPlacemark = new ymaps.Placemark(
    // Координаты метки
    [34.865966, -111.763806], {
      // Свойства
      // Текст метки
      hintContent: 'United States, Arizona, Sedona'
    }, {
      iconImageHref: 'img/icon-map-marker.svg', // картинка иконки
      iconImageSize: [27, 27], // размеры картинки
      iconImageOffset: [-145, -160] // смещение картинки
    });
  // Добавление метки на карту
  myMap.geoObjects.add(myPlacemark);
};

function initPage() {
  // инициализация карты (см в функцию initMap)
  ymaps.ready(initMap);
}

// запускает событие initPage после загрузки страницы
document.addEventListener("DOMContentLoaded", initPage);
