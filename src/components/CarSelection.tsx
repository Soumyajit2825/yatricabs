"use client";

import CarCard from './Car';
import '../styles/cars.css';

const CarSelection = () => {
  const carTypes = [
    {
      type: "AC Sedans",
      models: "Etios, Amaze, Dzire etc.",
      passengers: "4 Pax",
      idealFor: "Comfortable trips with small families",
      fare: "Rs.11/KM"
    },
    {
      type: "AC Hatchbacks",
      models: "Wagon R, Celerio, Micra etc.",
      passengers: "4 Pax",
      idealFor: "Budget trips over short distances",
      fare: "Rs.11/KM"
    },
    {
      type: "AC SUV",
      models: "Ertiga, Xylo etc.",
      passengers: "6-7 Pax",
      idealFor: "Premium trips with large families",
      fare: "Rs.13/KM"
    }
  ];

  return (
    <div className="car-type-container">
      {carTypes.map((car, index) => (
        <CarCard
          key={index}
          type={car.type}
          models={car.models}
          passengers={car.passengers}
          idealFor={car.idealFor}
          fare={car.fare}
        />
      ))}
    </div>
  );
};

export default CarSelection;