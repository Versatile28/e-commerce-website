import React from 'react';
import { render, screen, within } from '@testing-library/react';
import NewArrivalsSection from '../components/NewArrivalsSection';

describe('NewArrivalsSection Component', () => {
  test('renders the section region with correct aria-label', () => {
    render(<NewArrivalsSection />);
    const region = screen.getByRole('region', { name: /new arrivals/i });
    expect(region).toBeInTheDocument();
    expect(region).toHaveClass('new-arrivals-section');
  });

  test('renders the heading inside the section', () => {
    render(<NewArrivalsSection />);
    const region = screen.getByRole('region', { name: /new arrivals/i });
    const heading = within(region).getByRole('heading', { name: /new arrivals/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders the paragraph inside the section', () => {
    render(<NewArrivalsSection />);
    const region = screen.getByRole('region', { name: /new arrivals/i });
    expect(
      within(region).getByText(/One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections./i)
    ).toBeInTheDocument();
  });
});
