"use client";

import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import "../styles/booking.css";

export default function BookingForm() {
  const [serviceType, setServiceType] = useState("Outstation");
  const [tripType, setTripType] = useState("One Way");
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    pickupDate: "",
    pickupTime: "",
  });

  const handleSwapLocations = () => {
    setFormData((prev) => ({
      ...prev,
      from: prev.to,
      to: prev.from,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { serviceType, tripType, ...formData });
  };

  return (
    <div className="booking-container">
      <div className="service-tabs">
        {["Outstation", "Local", "Airport"].map((type) => (
          <button
            key={type}
            className={`service-tab ${serviceType === type ? "active" : ""}`}
            onClick={() => setServiceType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="trip-tabs">
        {["One Way", "Round Trip"].map((type) => (
          <button
            key={type}
            className={`trip-tab ${tripType === type ? "active" : ""}`}
            onClick={() => setTripType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-content">
          <div className="form-row">
            <div className="input-group">
              <div className="input-label">FROM</div>
              <input
                type="text"
                className="input-field"
                value={formData.from}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, from: e.target.value }))
                }
              />
            </div>

            <button
              type="button"
              className="swap-button"
              onClick={handleSwapLocations}
            >
              <ArrowLeftRight size={20} color="#666" />
            </button>

            <div className="input-group">
              <div className="input-label">TO</div>
              <input
                type="text"
                className="input-field"
                value={formData.to}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, to: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <div className="input-label">PICK UP DATE</div>
              <input
                type="date"
                className="input-field"
                value={formData.pickupDate}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    pickupDate: e.target.value,
                  }))
                }
              />
            </div>

            <div className="input-group">
              <div className="input-label">PICK UP AT</div>
              <input
                type="time"
                className="input-field"
                value={formData.pickupTime}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    pickupTime: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </div>
        <div className="explore-button-container">
          <button type="submit" className="explore-button">
            EXPLORE CABS
          </button>
        </div>
      </form>
    </div>
  );
}
