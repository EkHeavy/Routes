import RouterCard from "../components/RouterCard"

function RoutesPage() {
    return (
        <main>
            <h1>Туристические маршруты</h1>

            <section>
                <h2>Поиск маршрутов</h2>

                <input type="text"
                    placeholder="Введите название маршрута"/>

                <select>
                    <option value="">Все сложности</option>
                    <option value="easy">Легкая</option>
                    <option value="medium">Средняя</option>
                    <option value="hard">Сложная</option>
                </select>
            </section>

            <section>
                <h2>Маршруты</h2>

               <RouterCard id={1} name="Маршрут 1" city="Абакан"        complexity="Легкая"  image="/images/abakan.jpg"/>
               <RouterCard id={2} name="Маршрут 2" city="Москва"        complexity="Средняя" image="/images/moscow.jpg"/>
               <RouterCard id={3} name="Маршрут 3" city="Казань"        complexity="Сложная" image="/images/Ekaterinburg.jpg"/>
               <RouterCard id={4} name="Маршрут 4" city="Екатеринбург"  complexity="Легкая"  image="/images/.jpg"/>
               <RouterCard id={5} name="Маршрут 5" city="Уфа"           complexity="Средняя" image="/UFA/.jpg"/>
            </section>    
        </main>
    )
}

export default RoutesPage