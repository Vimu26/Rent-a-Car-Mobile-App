import {
  CAR_BRANDS,
  FUEL_TYPE,
  TRANSMISSION_TYPES,
  VEHICLE_TYPE,
} from '../types/types';

export interface IUser {
  _id?: string;
  name: string;
  contact: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ICarDetails {
  _id: string;
  brand: CAR_BRANDS;
  car_name: string;
  price_per_day: number;
  rate: number;
  year: number;
  transmission: TRANSMISSION_TYPES;
  fuel_type: FUEL_TYPE;
  type: VEHICLE_TYPE;
  seats: number;
  speed: number;
}
