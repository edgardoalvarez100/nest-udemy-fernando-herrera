import { Injectable } from '@nestjs/common';
import { CAR_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brands.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';


@Injectable()
export class SeedService {

  constructor(private readonly carservices:CarsService, private readonly brandservices:BrandsService){}

  populateDB(){

    this.brandservices.fillBrandWithSeedData(BRAND_SEED);
    this.carservices.fillCarsWithSeedData(CAR_SEED);

    return 'SEED executed successfull!!'
  }
}
