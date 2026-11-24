import { Link } from "react-router-dom";


function HomePage() {
    return (
        <main className="page home-page">
            <section className="hero-section">
                <div className="hero-content">
                    <span className="eyebrow">Новые впечатления рядом</span>
                    <h1>Каталог туристических маршрутов</h1>
                    <p className="hero-description">
                        Найдите прогулку для следующего путешествия: от спокойного
                        знакомства с городом до насыщенного маршрута на целый день.
                    </p>
                    <Link className="button button-primary" to="/routes">
                        Смотреть маршруты
                    </Link>
                </div>
            </section>

            <section className="home-intro">
                <span className="home-intro-icon" aria-hidden="true">⌖</span>
                <div>
                    <h2>Путешествуйте и открывайте новые места</h2>
                    <p>
                        В каталоге собраны маршруты разной длительности и сложности.
                        Используйте поиск и фильтры, добавляйте свои варианты и сохраняйте любимые.
                    </p>
                </div>
            </section>
        </main>
    );
}


export default HomePage;
