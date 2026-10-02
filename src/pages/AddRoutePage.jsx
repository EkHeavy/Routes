import RouteForm from "../components/RouteForm.jsx";

function AddRoutePage({ addRoute }) {
    return (
        <main>
            <h1>Добавить маршрут</h1>

            <RouteForm
                buttonText="Добавить маршрут"
                addRoute={addRoute}
            />
        </main>
    );
}

export default AddRoutePage;