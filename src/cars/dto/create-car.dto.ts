import { IsNotEmpty, IsString } from "class-validator";

export class CreateCarDto{

    
    @IsString()
    @IsNotEmpty()
    brand:string;

    @IsString()
    model:string;
}