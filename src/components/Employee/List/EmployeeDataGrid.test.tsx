// EmployeeDataGrid.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import EmployeeDataGrid from './EmployeeDataGrid';

describe('EmployeeDataGrid', () => {
  it('renders the EmployeeDataGrid component', () => {
    render(<EmployeeDataGrid />);
    const employeeDataGrid = screen.getByText('Name:'); 
    expect(employeeDataGrid).toBeInTheDocument();
  });

});
