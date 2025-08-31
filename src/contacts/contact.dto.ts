import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellido: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  celular: string;

  @IsNotEmpty()
  @IsString()
  mensaje: string;
}
