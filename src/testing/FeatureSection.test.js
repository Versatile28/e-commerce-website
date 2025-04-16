import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FeatureSection from '../components/FeatureSection';

describe('FeatureSection Component', () => {
  test('renders all four feature blocks with correct headings and descriptions', () => {
    render(<FeatureSection />);

    const headings = screen.getAllByRole('heading', { level: 6 });
    expect(headings).toHaveLength(4);

    expect(screen.getByText('Free Shipping over $300')).toBeInTheDocument();
    expect(screen.getByText('30 Days Money Back Guarantee')).toBeInTheDocument();
    expect(screen.getByText('Always the best prices')).toBeInTheDocument();
    expect(screen.getByText('24/7 Available Support')).toBeInTheDocument();
  });

  test('renders all feature blocks with SVG icons', () => {
    render(<FeatureSection />);
    
    const svgIcons = screen.getAllByRole('img', { hidden: true });
    expect(svgIcons.length).toBeGreaterThanOrEqual(4);
  });

  test('contains headings matching feature descriptions', () => {
    render(<FeatureSection />);
    
    const expectedHeadings = [
      'Free shipping & return',
      'Money / back guarantee',
      'Best prices',
      '020-800-456-747',
    ];

    expectedHeadings.forEach((text) => {
      expect(screen.getByRole('heading', { name: text })).toBeInTheDocument();
    });
  });
});
