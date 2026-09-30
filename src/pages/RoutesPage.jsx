import { useState } from "react";
import RouteFilters from "../components/RouterFilters.jsx";
import RouterCard from "../components/RouterCard.jsx";

function RoutesPage({ routes }) {
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
                setDifficulty={setDifficulty}
            />

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
                        />
                    ))
                ) : (
                    <p>Маршруты не найдены</p>
                )}
            </section>
        </main>
    );
}

export default RoutesPage;