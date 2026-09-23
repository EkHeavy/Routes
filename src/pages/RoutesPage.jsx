
import { useState } from "react";
import RouteFilters from "../components/RouterFilters.jsx";
import RouterCard from "../components/RouterCard.jsx";

const routes = [
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

function RoutesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [difficulty, setDifficulty] = useState("");

    const filteredRoutes = routes.filter((route) => {
        const matchesSearch = route.name
            .toLowerCase()
            .includes(searchTerm.trim().toLowerCase());

        const matchesDifficulty =
            difficulty === "" ||
            route.complexity === difficulty;

        return matchesSearch && matchesDifficulty;
    });

    return (
        <main>
            <h1>Туристические маршруты</h1>

            <RouteFilters
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                difficulty={difficulty}
                setDifficulty={setDifficulty}/>

            <section>
                <h2>Маршруты</h2>

                {filteredRoutes.length > 0 ? (
                    filteredRoutes.map((route) => (
                        <RouterCard
                            key={route.id}
                            name={route.name}
                            city={route.city}
                            duration={route.duration}
                            complexity={route.complexity}
                            description={route.description}
                            image={route.image}
                        />))) : (
                    <p>Маршруты не найдены</p>
                )}
            </section>
        </main>
);}

export default RoutesPage;