import RouteForm from "../components/RouteForm.jsx";


function AddRoutePage({ addRoute }) {
    return (
        <main className="page add-route-page">
            <section className="form-shell">
                <header className="form-header">
                    <span className="eyebrow">Ваше направление</span>
                    <h1>Добавить маршрут</h1>
                    <p>Заполните сведения, и новый маршрут сразу появится в общем каталоге.</p>
                </header>

                <RouteForm buttonText="Добавить маршрут" addRoute={addRoute} />
            </section>
        </main>
    );
}


export default AddRoutePage;
