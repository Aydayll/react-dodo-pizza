import React from 'react';
import PizzaItem from '../components/pizzaItem';
import Sort from '../components/sort';

const Home = () => {
    return (
        <div>
            <div class='content'>
                <div class='container'>
                    <div class='content__top'>
                        <div class='categories'>
                            <ul>
                                <li class='active'>Все</li>
                                <li>Мясные</li>
                                <li>Вегетарианская</li>
                                <li>Гриль</li>
                                <li>Острые</li>
                                <li>Закрытые</li>
                            </ul>
                        </div>
                        <Sort />
                    </div>
                    <h2 class='content__title'>Все пиццы</h2>
                    <div class='content__items'>
                            <PizzaItem />
                                </div>
                            </div>
                        </div>
                    </div>
                
          
      
    )
}

export default Home;
