// eslint-disable-next-line no-undef
const doc = document;
doc.addEventListener('DOMContentLoaded', () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log('ошибочка');
    } else {
      console.log('запрос удачный');
      const form = doc.querySelector('.form');
      const resultDiv = doc.createElement('div');
      resultDiv.style.background = 'red';
      resultDiv.innerHTML = xhr.response;
      form.appendChild(resultDiv);
    }
    console.log(JSON.parse(xhr.response));
  };
  xhr.onprogress = function (event) {
    console.log(`Загружено ${event.loaded} из ${event.total})`);
  };

  xhr.onerror = function () {
    console.log('нет соединения');
  };
});
