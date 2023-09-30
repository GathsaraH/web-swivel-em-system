import React from 'react';
import { render } from '@testing-library/react';
import TopBar from './TopBar';

describe('TopBar Component', () => {
  it('renders with the correct label when on Employee List page', () => {
    const { getByText, getByRole } = render(<TopBar />);
    const labelElement = getByText('LIST EMPLOYEE');
    const backButton = getByRole('button', { name: 'menu' });

    expect(labelElement).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
  });

  it('renders with the correct label when on Add Employee page', () => {
    jest.mock('next/navigation', () => ({
      usePathname: () => '/employee-add',
    }));

    const { getByText, getByRole } = render(<TopBar />);
    
    const labelElement = getByText('ADD EMPLOYEE');
    const backButton = getByRole('button', { name: 'menu' });

    expect(labelElement).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
  });

  it('renders with the correct label when on Edit Employee page', () => {
    jest.mock('next/navigation', () => ({
      usePathname: () => '/employee-edit[]',
    }));

    const { getByText, getByRole } = render(<TopBar />);
    
    const labelElement = getByText('EDIT EMPLOYEE');
    const backButton = getByRole('button', { name: 'back' });

    expect(labelElement).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
  });
});
