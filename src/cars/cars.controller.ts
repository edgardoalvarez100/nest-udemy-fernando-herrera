import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

   constructor(
   private readonly carsService:CarsService
   ){}

    @Get(":id")
    getCarById(@Param('id',ParseIntPipe) id:number){
        return this.carsService.findOne(id);
    }

    @Get()
    getAllCars(){
        return this.carsService.findAll(); 
    }

    @Post()
    createCar(@Body() body:any){
        return  {ok:true, body}
    }

    @Patch(':id')
    updateCar(@Body()body:any,@Param("id",ParseIntPipe) id:number){
        return {body,id}
    }

    @Delete(":id")
    deleteCar(@Param("id", ParseIntPipe) id:number){
        return {id}
    }

}
