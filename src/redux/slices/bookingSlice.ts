import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  serviceType: 'Outstation' | 'Local' | 'Airport';
  tripType: 'One Way' | 'Round Trip';
  formData: {
    from: string;
    to: string;
    pickupCity: string;
    pickupDate: string;
    returnDate: string;
    pickupTime: string;
  };
}

const initialState: BookingState = {
  serviceType: 'Outstation',
  tripType: 'One Way',
  formData: {
    from: '',
    to: '',
    pickupCity: '',
    pickupDate: '',
    returnDate: '',
    pickupTime: ''
  }
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setServiceType: (state, action: PayloadAction<'Outstation' | 'Local' | 'Airport'>) => {
      state.serviceType = action.payload;
    },
    setTripType: (state, action: PayloadAction<'One Way' | 'Round Trip'>) => {
      state.tripType = action.payload;
    },
    updateFormData: (state, action: PayloadAction<Partial<BookingState['formData']>>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    swapLocations: (state) => {
      const { from, to } = state.formData;
      state.formData.from = to;
      state.formData.to = from;
    }
  }
});

export const { setServiceType, setTripType, updateFormData, swapLocations } = bookingSlice.actions;
export default bookingSlice.reducer;