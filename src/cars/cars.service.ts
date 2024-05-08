import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid } from 'uuid'
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
@Injectable()
export class CarsService {
    private cars:Car[] = [
        {id:uuid(), brand:"toyota",  model:'corolla'},
        { id:uuid(), brand:'Honda', model:'Civic'}, 
        { id:uuid(), brand:"Jeep",  model:'Cherokee'}
    ]

    findAll(){
        return this.cars;
    }

    findOne(id:string){
        const car = this.cars.find(car => car.id === id)
        if(!car)
            throw new NotFoundException(`Car with id #${id} not found`);
        
        return car;
    }

    create(createCarDto:CreateCarDto){
        const car :Car = {id:uuid(), ...createCarDto}
        this.cars.push(car);
        return car;
    }

    update(id:string, updateCarDto:UpdateCarDto){
        let carDB = this.findOne(id);
        this.cars.map(car=>{
            if(car.id === id){
                carDB={...carDB,...UpdateCarDto,id};
                return carDB;
            }
            return car;
        })
        return carDB;//carro actualizado
    }

    delete(id:string){
        const car = this.findOne(id)
        this.cars = this.cars.filter(car=> id !== car.id)
        return car;
    }

}
