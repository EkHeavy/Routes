import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage"
import RoutesPage from "./pages/RoutesPage"
import RoutePage from "./pages/RoutePage"
import AddRoutePage from "./pages/AddRoutePage"
import Header from "./components/Header"


const routesCity = [
    {
        id: 1,
        name: "Маршрут 1",
        city: "Абакан",
        duration: "3 часа",
        complexity: "Легкая",
        description: "Прогулка по Абакану",
        image: "/images/abakan.jpg"
    },
    {
        id: 2,
        name: "Маршрут 2",
        city: "Москва",
        duration: "5 часов",
        complexity: "Средняя",
        description: "Прогулка по Москве",
        image: "/images/moscow.jpg"
    },
    {
        id: 3,
        name: "Маршрут 3",
        city: "Казань",
        duration: "7 часов",
        complexity: "Сложная",
        description: "Прогулка по Казани",
        image: ""
    },
    {
        id: 4,
        name: "Маршрут 4",
        city: "Екатеринбург",
        duration: "2 часа",
        complexity: "Легкая",
        description: "Прогулка по Екатеринбургу",
        image: ""
    },
    {
        id: 5,
        name: "Маршрут 5",
        city: "Уфа",
        duration: "4 часа",
        complexity: "Средняя",
        description: "Прогулка по Уфе",
        image: ""
    }
];

function App() {

    const [routes, setRoutes] = useState(routesCity);
    const [favoriteIds, setFavoriteIds] = useState([]);

    function toggleFavorite(routeId) {
        setFavoriteIds((previousIds) => {
            if (previousIds.includes(routeId)) {
                return previousIds.filter((id) => id !== routeId);
            }

            return [...previousIds, routeId];
        });
    }

  return (
    <>
        <Header siteName="Каталог туристических маршрутов" />

    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/routes" element={<RoutesPage routes={routes} />} />
        <Route path="/routes/:id" element={<RoutePage />} />
        <Route path="/add-route" element={<AddRoutePage />} />
    </Routes>
    </>
)}

export default App
/*
Реализовать:
название маршрута;
город;
длительность;
сложность;
описание;
фотографию;
поиск;
фильтрацию по сложности;
страницу маршрута;
добавление маршрута;
избранное.

Страницы:
Главная;
Маршруты;
Маршрут;
Добавить маршрут.
*/