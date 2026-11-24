# Каталог туристических маршрутов: Angular + React

Проект объединен в одно приложение:

- Angular запускает общую оболочку и отображает статистику;
- React отвечает за каталог, страницы, фильтры, форму, REST API и избранное;
- React собирается как Web Component `<tourist-routes-app>`;
- статистика передается из React в Angular через событие `catalog-change`.

## Запуск

```bash
npm run dev
```

После запуска откройте `http://localhost:4200`.

## Сборка

```bash
npm run build
```

Команда сначала собирает React-компонент в `angular-app/public/react-widget`, затем создает итоговую Angular-сборку в `angular-app/dist/angular-app`.

Для отдельного запуска старой React-точки входа остается команда `npm run dev:react`.
