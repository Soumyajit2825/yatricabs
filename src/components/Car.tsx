"use client";
import '../styles/cars.css';

interface CarCardProps {
  type: string;
  models: string;
  passengers: string;
  idealFor: string;
  fare: string;
}

const CarCard = ({ type, models, passengers, idealFor, fare }: CarCardProps) => {
  return (
    <div className="car-card">
      <div className="car-header">{type}</div>
      <div className="car-content">
        <div>
          <h3>MODEL INCLUDES</h3>
          <p>{models}</p>
        </div>
        <div>
          <h3>PASSENGERS</h3>
          <p>{passengers}</p>
        </div>
        <div>
          <h3>IDEAL FOR</h3>
          <p>{idealFor}</p>
        </div>
        <div className="fare">
          <h3>FARE</h3>
          <p>{fare}</p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;