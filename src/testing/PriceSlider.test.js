import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import noUiSlider from 'nouislider';
import PriceSlider from '../components/PriceSlider';

jest.mock('nouislider', () => ({
  create: jest.fn(),
}));

describe('PriceSlider component', () => {
  beforeEach(() => {
    noUiSlider.create.mockReturnValue({
      on: jest.fn(),
      destroy: jest.fn(),
    });
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('renders the slider container and initial min/max values', () => {
    const setMinValue = jest.fn();
    const setMaxValue = jest.fn();

    render(
      <PriceSlider
        min={0}
        max={250}
        minValue={10}
        maxValue={20}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
      />
    );

    expect(screen.getByTestId('nouislider')).toBeInTheDocument();
    expect(screen.getByText('From: $10')).toBeInTheDocument();
    expect(screen.getByText('To: $20')).toBeInTheDocument();
  });

  it('calls noUiSlider.create with the correct options', () => {
    const setMinValue = jest.fn();
    const setMaxValue = jest.fn();

    render(
      <PriceSlider
        min={0}
        max={250}
        minValue={0}
        maxValue={0}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
      />
    );

    expect(noUiSlider.create).toHaveBeenCalledTimes(1);

    const [sliderEl, options] = noUiSlider.create.mock.calls[0];
    expect(sliderEl).toBe(screen.getByTestId('nouislider'));
    expect(options).toEqual({
      start: [40, 110],
      connect: true,
      range: { min: 0, max: 250 },
      step: 1,
    });
  });

  it('invokes setMinValue, setMaxValue, and onChange when slider emits update', () => {
    const setMinValue = jest.fn();
    const setMaxValue = jest.fn();
    const onChange = jest.fn();

    const callbacks = {};
    noUiSlider.create.mockReturnValue({
      on: (evt, cb) => { callbacks[evt] = cb; },
      destroy: jest.fn(),
    });

    render(
      <PriceSlider
        min={0}
        max={250}
        minValue={0}
        maxValue={0}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        onChange={onChange}
      />
    );

    callbacks.update(['60', '150']);

    expect(setMinValue).toHaveBeenCalledWith(60);
    expect(setMaxValue).toHaveBeenCalledWith(150);
    expect(onChange).toHaveBeenCalledWith({ min: 60, max: 150 });
  });

  it('destroys the slider instance on unmount', () => {
    const setMinValue = jest.fn();
    const setMaxValue = jest.fn();
    const mockDestroy = jest.fn();

    noUiSlider.create.mockReturnValue({
      on: jest.fn(),
      destroy: mockDestroy,
    });

    const { unmount } = render(
      <PriceSlider
        min={0}
        max={250}
        minValue={0}
        maxValue={0}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
      />
    );

    unmount();
    expect(mockDestroy).toHaveBeenCalledTimes(1);
  });
});
