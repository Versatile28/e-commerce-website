import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CategorySection from '../components/CategorySection';

describe('CategorySection Component', () => {
  it('renders two category links to /category-full', () => {
    render(
      <MemoryRouter>
        <CategorySection />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '/category-full');
    });
  });

  it('renders women category image with correct src and alt text', () => {
    render(
      <MemoryRouter>
        <CategorySection />
      </MemoryRouter>
    );

    const womenImg = screen.getByRole('img', { name: 'Women Category' });
    expect(womenImg).toBeInTheDocument();
    expect(womenImg).toHaveAttribute('src', 'images/category-women.webp');
  });

  it('renders men category image with correct src and alt text', () => {
    render(
      <MemoryRouter>
        <CategorySection />
      </MemoryRouter>
    );

    const menImg = screen.getByRole('img', { name: 'Men Category' });
    expect(menImg).toBeInTheDocument();
    expect(menImg).toHaveAttribute('src', 'images/category-men.webp');
  });

  it('displays overlay text for both categories', () => {
    render(
      <MemoryRouter>
        <CategorySection />
      </MemoryRouter>
    );

    expect(screen.getByText('Women')).toBeVisible();
    expect(screen.getByText('Men')).toBeVisible();
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CategorySection />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
