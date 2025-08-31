import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from './contact.schema';
import { CreateContactDto } from './contact.dto';

@Injectable()
export class ContactsService {
  constructor(@InjectModel(Contact.name) private contactModel: Model<Contact>) {}

  async create(createContactDto: CreateContactDto): Promise<Contact> {
    return this.contactModel.create(createContactDto);
  }

  async findAll(): Promise<Contact[]> {
    return this.contactModel.find().sort({ createdAt: -1 });
  }

  async remove(id: string): Promise<void> {
    await this.contactModel.findByIdAndDelete(id);
  }
}
