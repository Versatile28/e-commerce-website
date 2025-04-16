import React from 'react';
import { render, screen, act } from '@testing-library/react';
import CountdownSection from '../components/CountdownSection';

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe('CountdownSection Component', () => {
  test('renders static content correctly', () => {
    render(<CountdownSection />);

    expect(screen.getByText(/deal of the week/i)).toBeInTheDocument();
    expect(screen.getByText(/oversized denim jacket/i)).toBeInTheDocument();
    expect(screen.getByText(/\$120\.00/)).toBeInTheDocument();
    expect(screen.getByText(/\$79\.00/)).toBeInTheDocument();
    expect(screen.getByText(/\$50 off/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /shop now/i })).toBeInTheDocument();
  });

  test('displays countdown items (days, hours, minutes, seconds)', () => {
    render(<CountdownSection />);
    expect(screen.getByText(/days/i)).toBeInTheDocument();
    expect(screen.getByText(/hours/i)).toBeInTheDocument();
    expect(screen.getByText(/minutes/i)).toBeInTheDocument();
    expect(screen.getByText(/seconds/i)).toBeInTheDocument();
  });

  test('updates countdown values over time', () => {
    const fixedNow = new Date('2025-03-29T23:59:50');
    jest.setSystemTime(fixedNow);

    render(<CountdownSection />);
    
    expect(screen.getByText('10')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
