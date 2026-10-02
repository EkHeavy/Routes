import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage.jsx";
import RoutesPage from "./pages/RoutesPage.jsx";
import RoutePage from "./pages/RoutePage.jsx";
import AddRoutePage from "./pages/AddRoutePage.jsx";

import Header from "./components/Header.jsx";


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

                (route) => route.id !== routeId

            )

        );

    }


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
                        />
                    }
                />


                <Route
                    path="/routes/:id"
                    element={
                        <RoutePage
                            routes={routes}/>}/>

                <Route
                    path="/add-route"
                    element={
                        <AddRoutePage addRoute={addRoute}/>}/></Routes></>);}


export default App;