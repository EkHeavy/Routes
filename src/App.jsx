import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./pages/HomePage.jsx";
import RoutesPage from "./pages/RoutesPage.jsx";
import RoutePage from "./pages/RoutePage.jsx";
import AddRoutePage from "./pages/AddRoutePage.jsx";

import Header from "./components/Header.jsx";
import "./App.css";


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


function App({ onCatalogChange }) {

    const [routes, setRoutes] = useState(routesCity);
    const [favorites, setFavorites] = useState([]);

    // Состояние загрузки данных с API
    const [apiStatus, setApiStatus] = useState("loading");


    // Получение данных с внешнего REST API
    useEffect(() => {

        async function loadRoutesFromApi() {

            try {

                setApiStatus("loading");


                const response = await fetch(
                    "https://dummyjson.com/users?limit=5"
                );


                if (!response.ok) {
                    throw new Error(
                        "Ошибка при загрузке данных"
                    );
                }


                const data = await response.json();


                const difficulties = [
                    "Легкая",
                    "Средняя",
                    "Сложная"
                ];


                // Преобразуем данные API
                // в туристические маршруты
                const apiRoutes = data.users.map(
                    (user, index) => {

                        const city =
                            user.address?.city ||
                            "Неизвестный город";


                        return {
                            id: 1000 + user.id,

                            name:
                                `Маршрут по городу ${city}`,

                            city: city,

                            duration:
                                `${index + 2} часа`,

                            complexity:
                                difficulties[
                                    index %
                                    difficulties.length
                                ],

                            description:
                                `Туристический маршрут по городу ${city}. Данные получены с внешнего REST API.`,

                            image:
                                user.image || ""
                        };
                    }
                );


                // Добавляем данные API
                // к существующим маршрутам
                setRoutes((previousRoutes) => {

                    // Убираем старые API-маршруты,
                    // чтобы они не дублировались
                    const routesWithoutApi =
                        previousRoutes.filter(
                            (route) =>
                                !(
                                    route.id >= 1000 &&
                                    route.id < 2000
                                )
                        );


                    return [
                        ...routesWithoutApi,
                        ...apiRoutes
                    ];
                });


                setApiStatus("success");

            } catch (error) {

                console.error(
                    "Ошибка API:",
                    error
                );


                setApiStatus("error");
            }
        }


        loadRoutesFromApi();

    }, []);


    // Добавление нового маршрута
    function addRoute(newRoute) {

        setRoutes((previousRoutes) => [
            ...previousRoutes,
            newRoute
        ]);

    }


    // Удаление маршрута
    function deleteRoute(routeId) {

        setRoutes((previousRoutes) =>

            previousRoutes.filter(
                (route) =>
                    route.id !== routeId
            )

        );

        setFavorites((previousFavorites) =>
            previousFavorites.filter((id) => id !== routeId)
        );

    }


    // Избранное хранится в React, а его количество передается Angular-оболочке.
    function toggleFavorite(routeId) {
        setFavorites((previousFavorites) =>
            previousFavorites.includes(routeId)
                ? previousFavorites.filter((id) => id !== routeId)
                : [...previousFavorites, routeId]
        );
    }


    useEffect(() => {
        onCatalogChange?.({
            routeCount: routes.length,
            favoriteCount: favorites.length,
            apiStatus
        });
    }, [routes, favorites, apiStatus, onCatalogChange]);


    return (
        <>

            <Header
                siteName="Каталог туристических маршрутов"
            />


            <Routes>

                <Route
                    path="/"
                    element={
                        <HomePage />
                    }
                />


                <Route
                    path="/routes"
                    element={
                        <RoutesPage
                            routes={routes}
                            deleteRoute={deleteRoute}
                            apiStatus={apiStatus}
                            favorites={favorites}
                            toggleFavorite={toggleFavorite}
                        />
                    }
                />


                <Route
                    path="/routes/:id"
                    element={
                        <RoutePage
                            routes={routes}
                            favorites={favorites}
                            toggleFavorite={toggleFavorite}
                        />
                    }
                />


                <Route
                    path="/add-route"
                    element={
                        <AddRoutePage
                            addRoute={addRoute}
                        />
                    }
                />

            </Routes>

        </>
    );
}


export default App;
