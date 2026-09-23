import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import RoutesPage from "./pages/RoutesPage"
import RoutePage from "./pages/RoutePage"
import AddRoutePage from "./pages/AddRoutePage"
import Header from "./components/Header"


function App() {

    const [routes, setRoutes] = useState(initialRoutes);
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
        <Route path="/routes" element={<RoutesPage />} />
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