import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import RoutesPage from "./pages/RoutesPage"
import RoutePage from "./pages/RoutePage"
import AddRoutePage from "./pages/AddRoutePage"

function App() {

    return (

        <Routes>
            <Route path="/" element={<HomePage />} ></Route>
            <Route path="/routes" element={<RoutePage />} ></Route>
            <Route path="/routes/:id" element={<RoutesPage />} ></Route>
            <Route path="/add-route" element={<AddRoutePage />} ></Route>
        </Routes>
    )
}

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