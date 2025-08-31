import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Contact extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  apellido: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  celular: string;

  @Prop({ required: true })
  mensaje: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
