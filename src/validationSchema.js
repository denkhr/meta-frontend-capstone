const validationSchema = Yup.object().shape({
    name: Yup.string().required('Your name is required'),
    phone: Yup.string().required('Phone number is required').matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, 'Invalid phone number'),
    selectedDate: Yup.date().required('Date is required'),
    selectedTime: Yup.string().required('Time is required'),
    numberOfGuests: Yup.number().required('Number of guests is required').min(1, 'Number of guests must be at least 1').max(10, 'The number of guests should be no more than 10'),
    occasion: Yup.string().required('Occasion is required')
  });