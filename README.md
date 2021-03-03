# Test task for Future Group

#### Реализованный функционал:

* Сортировка по столбцам: при нажатии на столбец `Id` 
  строки таблицы сортируются по возрастанию, 
  при повторном клике — по убыванию. 
  
* Клиентская пагинация: данные отображаются постранично, 
  максимум 50 элементов на страницу. 
  Пользователю предоставлена навигацию для перехода по страницам.
  
* Фильтрация: компонент предоставляет текстовое поле, 
  в которое пользователь может ввести текст и строки таблицы, 
  данные которых не содержат подстроку, введённую пользователем, скрываются. 
  Перефильтрация осуществляется по нажатию на кнопку "Найти".
  
* По клику на строку таблицы значения полей выводятся в дополнительном блоке под таблицей.
  
* Данные в таблицу загружаются с сервера. Способ загрузки с сервера на ваш выбор.
  
* Над таблицей присутсвует кнопка добавить, 
  по нажатии на которую выпадает форма добавления ряда. 
  Для каждого поля добавлена валидация (id — число, firstName, lastName — буквы, email — формат email, phone — маска телефона).
  
## Clone & Run

### Clone repo
`git clone https://github.com/vanilla64/test-task-future-group.git`
`cd test-task-future-group`
`npm install`
##### Сборка для деплоя
`npm build`
##### Сборка для разработки
`npm start`

### Запуск из Docker контейнера
`docker pull vanillaen/test-task-future-group`

##### Сергей Машин [VK](https://vk.com/vanilla64)

