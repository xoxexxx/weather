import { Card } from './Card';

export const CardList =({list, setList}: any) => {
    
    const remove = ((city: string)  =>  {
        setList(list.filter((x: string) => x !== city))
    }) 
   
    return(
        <div className="card-list">
            {list.map((city: string) => <Card key={city} city={city} remove={remove}/>)}
        </div>
    )
}