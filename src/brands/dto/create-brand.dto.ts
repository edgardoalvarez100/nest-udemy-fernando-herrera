import { IsString, MinDate, MinLength } from "class-validator";

export class CreateBrandDto {
    @IsString()
    @MinLength(1)
    name:string;

}
