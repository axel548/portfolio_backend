import { Schema, model, Document } from 'mongoose';

export interface IServiceItem {
    title: string;
    description: string;
    icon: string;
}

export interface IService extends Document {
    lang: string;
    title:string;
    description:string;
    services: IServiceItem[];
}

const ServiceItemSchema = new Schema<IServiceItem>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
});

const ServiceSchema = new Schema<IService>({
    lang: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    services: [ServiceItemSchema],
});

export default model<IService>('Service', ServiceSchema);
