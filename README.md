# Getting Started with this template

/components - basic components with a ban on importing other parts of the application;<br>
/services - functions for communicating with the backend;<br>
/forms - Forms components;<br>
/layouts - components without logic that determine the positioning of the components inside themselves and adapt to different screen sizes;<br>
/pages — components referred to by routes do not contain any logic other than passing route parameters and defining layouts;<br>
/tools - logical solutions (validations, reductions, calculations)<br>
<br>
Each component is formatted as<br>
ComponentName/ - folder for grouping everything related to the component<br>
- index.js - export;<br>
- ComponentName.js - code of the child component during decomposition;<br>
- ComponentName.test.js - unit tests of the component;<br>
- ComponentName.module.css - component styles;<br>
---------------------------------------------------------------------------
// translate:<br>
/components — базовые компоненты с запретом импорта других частей приложения;<br>
/services — функции общения с бекендом;<br>
/forms — Форм компоненты;<br>
/layouts — компоненты без логики определяющие позиционирование компонент внутри себя и адаптацию под разные размеры экрана;<br>
/pages — компоненты на которые ссылаются роуты, не содержат в себе логики кроме передачи параметров роута и определения лэйаутов;<br>
/tools — логические решения (валидации, сокращения, вычисления)<br>
<br>
Каждая компонента оформляется как:<br>
ComponentName/ — папка для группировки всего что относится к компоненте<br>
— index.js — экспорт ;<br>
— ComponentName.jsx — код дочерней компоненты при декомпозиции;<br>
— ComponentName.test.js — юнит тесты компоненты;<br>
— ComponentName.module.css - стили компонента;<br>
