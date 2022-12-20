import React from 'react'
import { Card } from '../../UI/Card/Card'
import { MealItem } from '../MealItem/MealItem'
import classes from './AvailableMeals.module.css'

export const AvailableMeals = () => {
    const DUMMY_MEALS = [
        {
            id: 'm1',
            name: 'Sushi',
            description: 'Finest fish and veggies',
            price: 22.99,
        },
        {
            id: 'm2',
            name: 'Schnitzel',
            description: 'A german specialty!',
            price: 16.5,
        },
        {
            id: 'm3',
            name: 'Barbecue Burger',
            description: 'American, raw, meaty',
            price: 12.99,
        },
        {
            id: 'm4',
            name: 'Green Bowl',
            description: 'Healthy...and green...',
            price: 18.99,
        },
    ];

    return (
        <div className={classes.meals}>
            <Card>
                {DUMMY_MEALS.map((e) =>
                    <MealItem
                        key={e.id}
                        id = {e.id}
                        name={e.name}
                        desc={e.description}
                        price= {e.price}
                    />
                )}
            </Card>
        </div>
    )
}
