import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import BrandSection from '../components/BrandSection';

describe('BrandSection Component', () => {
  test('renders brand carousel container', async () => {
    render(<BrandSection />);
    const carouselContainer = await screen.findByTestId('brand-carousel');
    expect(carouselContainer).toBeInTheDocument();
  });

  test('renders all brand logos with correct alt texts', async () => {
    render(<BrandSection />);
    const expectedAlts = [
      'Brand 1',
      'Brand 2',
      'Brand 3',
      'Brand 4',
      'Brand 5',
      'Brand 6'
    ];

    for (const altText of expectedAlts) {
      expect(await screen.findByAltText(altText)).toBeInTheDocument();
    }
  });

  test('renders at least six image elements within the brand carousel container', async () => {
    render(<BrandSection />);
    const carouselContainer = await screen.findByTestId('brand-carousel');
    const images = within(carouselContainer).getAllByRole('img');
    expect(images.length).toBeGreaterThanOrEqual(6);
  });
});
