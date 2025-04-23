import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CategoryMenuContainer from '../components/CategoryMenuContainer';

// Mock PriceSlider to verify props passed
jest.mock('../components/PriceSlider', () => ({
  __esModule: true,
  default: ({ minValue, maxValue }) => (
    <div data-testid="price-slider" data-min={minValue} data-max={maxValue} />
  ),
}));

describe('CategoryMenuContainer', () => {
  let props;

  beforeEach(() => {
    props = {
      colors: [
        { id: 'red', color: '#ff0000' },
        { id: 'green', color: '#00ff00' },
      ],
      selectedColors: ['red'],
      clearFilters: jest.fn(),
      handleCheckboxChange: jest.fn(),
      handleRadioChange: jest.fn(),
      handleColorChange: jest.fn(),
      handleCategoryChange: jest.fn(),
      minValue: 10,
      setMinValue: jest.fn(),
      maxValue: 100,
      setMaxValue: jest.fn(),
      selectedBrands: {
        'Calvin Klein': true,
        'Levi Strauss': false,
        'Hugo Boss': false,
        'Tomi Hilfiger': false,
        'Tom Ford': false,
      },
      selectedSize: 'MEDIUM',
    };
  });

  it('renders all category headers with correct counts', () => {
    render(<CategoryMenuContainer {...props} />);

    // Category headers and counts
    expect(screen.getByText('Trousers')).toBeInTheDocument();
    expect(screen.getByText('120')).toBeInTheDocument();

    // 'Jackets' appears both as header and in list; ensure at least one header
    const jacketsTitles = screen.getAllByText('Jackets');
    expect(jacketsTitles.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('55')).toBeInTheDocument();

    expect(screen.getByText('T-Shirts')).toBeInTheDocument();
    expect(screen.getByText('33')).toBeInTheDocument();
  });

  it('calls handleCategoryChange when a category item is clicked', () => {
    render(<CategoryMenuContainer {...props} />);

    // Open the 'Trousers' accordion
    const trousersButton = screen.getByRole('button', { name: /Trousers/i });
    fireEvent.click(trousersButton);

    // Click 'Jeans' item
    const jeansItem = screen.getByText('Jeans');
    fireEvent.click(jeansItem);
    expect(props.handleCategoryChange).toHaveBeenCalledWith('Jeans');
  });

  it('passes correct min and max to PriceSlider', () => {
    render(<CategoryMenuContainer {...props} />);
    const slider = screen.getByTestId('price-slider');
    expect(slider).toHaveAttribute('data-min', '10');
    expect(slider).toHaveAttribute('data-max', '100');
  });

  it('renders brand checkboxes and triggers handleCheckboxChange', () => {
    render(<CategoryMenuContainer {...props} />);
    const calvin = screen.getByLabelText(/Calvin Klein/i);
    expect(calvin.checked).toBe(true);
    fireEvent.click(calvin);
    expect(props.handleCheckboxChange).toHaveBeenCalled();
  });

  it('renders size radio buttons and triggers handleRadioChange', () => {
    render(<CategoryMenuContainer {...props} />);
    const small = screen.getByLabelText(/Small/i);
    expect(small).not.toBeChecked();
    fireEvent.click(small);
    expect(props.handleRadioChange).toHaveBeenCalled();
  });

  it('renders color checkboxes and triggers handleColorChange', () => {
    render(<CategoryMenuContainer {...props} />);
    const colorCheckboxes = screen.getAllByRole('checkbox');
    const redInput = colorCheckboxes.find(input => input.id === 'red');
    expect(redInput).toBeChecked();
    fireEvent.click(redInput);
    expect(props.handleColorChange).toHaveBeenCalledWith('red');
  });

  it('calls clearFilters when clear filters button is clicked', () => {
    render(<CategoryMenuContainer {...props} />);
    fireEvent.click(screen.getByText(/clear filters/i));
    expect(props.clearFilters).toHaveBeenCalled();
  });
});
