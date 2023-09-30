// EmployeeTable.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import EmployeeTable from './EmployeeTable';

describe('EmployeeTable', () => {
  it('renders the EmployeeTable component', () => {
    render(<EmployeeTable />);
    const table = screen.getByRole('table'); 
    expect(table).toBeInTheDocument();
  });

  it('renders table headers', () => {
    render(<EmployeeTable />);

    const headers = screen.getAllByRole('columnheader');
    expect(headers).toHaveLength(7); 
  });

  it('renders employee data rows', () => {
    render(<EmployeeTable />);
    const rows = screen.getAllByRole('row', { name: /Employee Row/i });
    expect(rows).toHaveLength(6); 
  });

});
