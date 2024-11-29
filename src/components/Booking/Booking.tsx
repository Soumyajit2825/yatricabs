/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeftRight } from "lucide-react";
import "./booking.css";
import {
  setServiceType,
  setTripType,
  updateFormData,
  swapLocations,
} from "../../redux/slices/bookingSlice";
import { RootState } from "@/redux/store";

export default function BookingForm() {
  const dispatch = useDispatch();
  const { serviceType, tripType, formData } = useSelector(
    (state: RootState) => state.booking
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { serviceType, tripType, formData });
  };

  const renderFormFields = () => {
    switch (serviceType) {
      case "Outstation":
        return (
          <>
            <div className="form-row">
              <div className="input-group">
                <div className="input-label">FROM</div>
                <input
                  type="text"
                  className="input-field"
                  value={formData.from}
                  onChange={(e) =>
                    dispatch(updateFormData({ from: e.target.value }))
                  }
                />
              </div>
              <button
                type="button"
                className="swap-button"
                onClick={() => dispatch(swapLocations())}
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
                    dispatch(updateFormData({ to: e.target.value }))
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
                    dispatch(updateFormData({ pickupDate: e.target.value }))
                  }
                />
              </div>
              {tripType === "Round Trip" && (
                <div className="input-group">
                  <div className="input-label">RETURN DATE</div>
                  <input
                    type="date"
                    className="input-field"
                    value={formData.returnDate}
                    onChange={(e) =>
                      dispatch(updateFormData({ returnDate: e.target.value }))
                    }
                  />
                </div>
              )}
              <div className="input-group">
                <div className="input-label">PICK UP AT</div>
                <input
                  type="time"
                  className="input-field"
                  value={formData.pickupTime}
                  onChange={(e) =>
                    dispatch(updateFormData({ pickupTime: e.target.value }))
                  }
                />
              </div>
            </div>
          </>
        );

      case "Local":
        return (
          <div className="form-row">
            <div className="input-group">
              <div className="input-label">PICK UP CITY</div>
              <input
                type="text"
                className="input-field"
                value={formData.pickupCity}
                onChange={(e) =>
                  dispatch(updateFormData({ pickupCity: e.target.value }))
                }
              />
            </div>
            <div className="input-group">
              <div className="input-label">PICK UP DATE</div>
              <input
                type="date"
                className="input-field"
                value={formData.pickupDate}
                onChange={(e) =>
                  dispatch(updateFormData({ pickupDate: e.target.value }))
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
                  dispatch(updateFormData({ pickupTime: e.target.value }))
                }
              />
            </div>
          </div>
        );

      case "Airport":
        return (
          <>
            <div className="form-row">
              <div className="input-group">
                <div className="input-label">FROM</div>
                <input
                  type="text"
                  className="input-field"
                  value={formData.from}
                  onChange={(e) =>
                    dispatch(updateFormData({ from: e.target.value }))
                  }
                />
              </div>
              <div className="input-group">
                <div className="input-label">TO</div>
                <input
                  type="text"
                  className="input-field"
                  value={formData.to}
                  onChange={(e) =>
                    dispatch(updateFormData({ to: e.target.value }))
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
                    dispatch(updateFormData({ pickupDate: e.target.value }))
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
                    dispatch(updateFormData({ pickupTime: e.target.value }))
                  }
                />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="booking-container">
      <div className="service-tabs">
        {["Outstation", "Local", "Airport"].map((type) => (
          <button
            key={type}
            className={`service-tab ${serviceType === type ? "active" : ""}`}
            onClick={() => dispatch(setServiceType(type as any))}
          >
            {type}
          </button>
        ))}
      </div>

      {serviceType === "Outstation" && (
        <div className="trip-tabs">
          {["One Way", "Round Trip"].map((type) => (
            <button
              key={type}
              className={`trip-tab ${tripType === type ? "active" : ""}`}
              onClick={() => dispatch(setTripType(type as any))}
            >
              {type}
            </button>
          ))}
        </div>
      )}

      <form className="booking-form" onSubmit={handleSubmit}>
        {renderFormFields()}
        <div className="explore-button-container">
          <button type="submit" className="explore-button">
            EXPLORE CABS
          </button>
        </div>
      </form>
    </div>
  );
}
