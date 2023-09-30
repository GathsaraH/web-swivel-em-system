// Import necessary packages
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import "@testing-library/jest-dom";
import EmployeeForm from './EmployeeForm';

// Import Redux Provider and store
import { Provider } from 'react-redux'; // Import this from 'react-redux'
import { store } from '@/redux/store';


describe('EmployeeForm', () => {
  it('renders the First Name input field', () => {
    render(
      <Provider store={store}>
        <EmployeeForm />
      </Provider>
    );
    const firstNameInput = screen.getByLabelText('First Name');
    expect(firstNameInput).toBeInTheDocument();
  });

  it('allows user input in the First Name field', () => {
    render(
      <Provider store={store}>
        <EmployeeForm />
      </Provider>
    );
    const firstNameInput = screen.getByLabelText('First Name');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput).toHaveValue('John');
  });

  it('submits the form with valid data', async () => {
    render(
      <Provider store={store}>
        <EmployeeForm />
      </Provider>
    );
    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email');
    const phoneInput = screen.getByLabelText('Phone');
    const genderSelect = screen.getByLabelText('Gender');
    const addButton = screen.getByText('ADD');

    fireEvent.change(firstNameInput, { target: { value: 'Gathsara' } });
    fireEvent.change(lastNameInput, { target: { value: 'Umesh' } });
    fireEvent.change(emailInput, { target: { value: 'umesh@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '0716384628' } });
    fireEvent.change(genderSelect, { target: { value: 'male' } });

    await act(async () => {
      fireEvent.click(addButton);
    });
  });
});
