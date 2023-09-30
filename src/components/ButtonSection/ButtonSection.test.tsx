import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; // 
import configureStore from 'redux-mock-store';
import ButtonSection from './ButtonSection';
const mockStore = configureStore([]); // Create a mock Redux store

describe('ButtonSection', () => {
  it('renders the LIST VIEW button when on ADD_EMPLOYEE page', () => {
    const initialState = {
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <ButtonSection />
      </Provider>
    );

    const listViewButton = screen.getByText('LIST VIEW');
    expect(listViewButton).toBeInTheDocument();
  });

  it('renders the ADD EMPLOYEE button when on EMPLOYEE_LIST page', () => {
    const initialState = {
      // Define your initial Redux state here
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <ButtonSection />
      </Provider>
    );

    const addEmployeeButton = screen.getByText('ADD EMPLOYEE');
    expect(addEmployeeButton).toBeInTheDocument();
  });

  it('renders the Grid View icon button when on EMPLOYEE_LIST page and listView is GRID_VIEW', () => {
    const initialState = {
      employeeReducer: {
        listViewAction: 'GRID_VIEW', // Set listView to GRID_VIEW
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <ButtonSection />
      </Provider>
    );

    const gridViewButton = screen.getByLabelText('Grid View');
    expect(gridViewButton).toBeInTheDocument();
  });

  it('renders the Table View icon button when on EMPLOYEE_LIST page and listView is TABLE_VIEW', () => {
    const initialState = {
      employeeReducer: {
        listViewAction: 'TABLE_VIEW', // Set listView to TABLE_VIEW
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <ButtonSection />
      </Provider>
    );

    const tableViewButton = screen.getByLabelText('Table View');
    expect(tableViewButton).toBeInTheDocument();
  });

  it('triggers handleListView function when LIST VIEW button is clicked', () => {
    const initialState = {
      // Define your initial Redux state here
    };
    const store = mockStore(initialState);
    const handleListViewMock = jest.fn(); 

    render(
      <Provider store={store}>
        <ButtonSection />
      </Provider>
    );

    const listViewButton = screen.getByText('LIST VIEW');
    fireEvent.click(listViewButton);

    // Assert that handleListViewMock was called
    expect(handleListViewMock).toHaveBeenCalled();
  });
});
