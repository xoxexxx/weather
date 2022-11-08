import { Card } from './Card';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import React from 'react'

export const CardList =({list, setList}: any) => {
    
    const remove = ((city: any) => {
        setList(list.filter((x:any) => x !== city))
    }) 
   
    return(
        <div className="card-list">
            {list.map((city: any) => <Card key={city} city={city} remove={remove}/>)}
        </div>
    )
}