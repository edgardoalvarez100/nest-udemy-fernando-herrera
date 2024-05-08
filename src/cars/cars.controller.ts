import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

   constructor(
   private readonly carsService:CarsService
   ){}

    @Get(":id")
    getCarById(@Param('id',ParseUUIDPipe) id:string){
        return this.carsService.findOne(id);
    }

    @Get()
    getAllCars(){
        return this.carsService.findAll(); 
    }

    @Post()
    createCar(@Body() createCarDto:CreateCarDto){
        return  this.carsService.create(createCarDto);
    }

    @Patch(':id' )
    updateCar(@Body()updateCarDto:UpdateCarDto,@Param("id",ParseUUIDPipe) id:string){
        return this.carsService.update(id,updateCarDto);
    }

    @Delete(":id")
    deleteCar(@Param("id",ParseUUIDPipe) id:string){
        return this.carsService.delete(id);
    }

}
