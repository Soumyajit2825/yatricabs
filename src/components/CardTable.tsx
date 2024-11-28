"use client";
import "../styles/cars.css";

const CarTable = () => {
  const carData = [
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
    <table className="car-table">
      <thead className="table-header">
        <tr>
          <th>CAR TYPE</th>
          <th>MODEL INCLUDES</th>
          <th>PASSENGERS</th>
          <th>IDEAL FOR</th>
          <th>FARE</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {carData.map((car, index) => (
          <tr key={index}>
            <td className="car-type-cell">{car.type}</td>
            <td>{car.models}</td>
            <td className="passengers-cell">{car.passengers}</td>
            <td className="ideal-for-cell">{car.idealFor}</td>
            <td className="fare-cell">{car.fare}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CarTable;