import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 
import ConformationPopUp from './ConformationPopUp';
import { store } from '@/redux/store';

describe('ConformationPopUp Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ConformationPopUp />
      </Provider>
    );

    expect(getByText('Do you want to delete this employee?')).toBeInTheDocument();
    expect(getByText('This action cannot be undone.')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
    expect(getByText('Delete')).toBeInTheDocument();
  });

  it('calls handleClose when Cancel button is clicked', async () => {
    const handleClose = jest.fn();

    const { getByText } = render(
      <Provider store={store}>
        <ConformationPopUp />
      </Provider>
    );

    fireEvent.click(getByText('Cancel'));

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
    });
  });

  it('calls handleDelete when Delete button is clicked', async () => {
    const handleDelete = jest.fn();

    const { getByText } = render(
      <Provider store={store}>
        <ConformationPopUp />
      </Provider>
    );

    fireEvent.click(getByText('Delete'));

    await waitFor(() => {
      expect(handleDelete).toHaveBeenCalled();
    });
  });
});
