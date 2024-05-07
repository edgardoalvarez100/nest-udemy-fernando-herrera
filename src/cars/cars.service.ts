import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [{brand:"toyota",id:1,model:'corolla'},{id:2,brand:'Honda',model:'Civic'}, {brand:"Jeep",id:3, model:'Cherokee'}]

    findAll(){
        return this.cars;
    }

    findOne(id:number){
        const car = this.cars.find(car => car.id === id)
        if(!car)
            throw new NotFoundException(`Car with id #${id} not found`);
        
        return car;
    }

    create(){
        
    }

}
