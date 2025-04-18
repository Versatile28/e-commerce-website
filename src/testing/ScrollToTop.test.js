import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScrollToTop from '../components/ScrollToTop';
import { useLocation } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
}));

describe('ScrollToTop component', () => {
  let scrollToSpy;
  const mockUseLocation = useLocation;

  beforeEach(() => {
    scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
    jest.clearAllMocks();
  });

  afterEach(() => {
    scrollToSpy.mockRestore();
  });

  test('renders nothing (no DOM output)', () => {
    mockUseLocation.mockReturnValue({ pathname: '/initial' });
    render(
      <div data-testid="wrapper">
        <ScrollToTop />
      </div>
    );
    const wrapper = screen.getByTestId('wrapper');
    expect(wrapper).toBeEmptyDOMElement();
  });

  test('calls window.scrollTo on mount with initial pathname', () => {
    mockUseLocation.mockReturnValue({ pathname: '/home' });
    render(<ScrollToTop />);
    expect(scrollToSpy).toHaveBeenCalledTimes(1);
    expect(scrollToSpy).toHaveBeenCalledWith(0, 0);
  });

  test('does not call window.scrollTo again if pathname remains the same', () => {
    mockUseLocation.mockReturnValue({ pathname: '/about' });
    const { rerender } = render(<ScrollToTop />);
    expect(scrollToSpy).toHaveBeenCalledTimes(1);

    mockUseLocation.mockReturnValue({ pathname: '/about' });
    rerender(<ScrollToTop />);
    expect(scrollToSpy).toHaveBeenCalledTimes(1);
  });

  test('calls window.scrollTo again when pathname changes', () => {
    mockUseLocation.mockReturnValue({ pathname: '/page1' });
    const { rerender } = render(<ScrollToTop />);
    expect(scrollToSpy).toHaveBeenCalledTimes(1);
    
    mockUseLocation.mockReturnValue({ pathname: '/page2' });
    rerender(<ScrollToTop />);
    expect(scrollToSpy).toHaveBeenCalledTimes(2);
    expect(scrollToSpy).toHaveBeenLastCalledWith(0, 0);
  });
});
