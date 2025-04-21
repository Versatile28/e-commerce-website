import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroCarousel from '../components/HeroCarousel';

jest.mock('swiper/modules', () => ({
  Navigation: 'navModule',
  Pagination: 'pagModule',
  A11y: 'a11yModule',
}));

jest.mock('swiper/react', () => ({
  Swiper: ({
    children,
    className,
    modules,
    spaceBetween,
    navigation,
    pagination,
    loop,
    grabCursor,
    speed,
  }) => (
    <div
      data-testid="swiper"
      data-class={className}
      data-modules={JSON.stringify(modules)}
      data-space-between={spaceBetween}
      data-navigation={JSON.stringify(navigation)}
      data-pagination={JSON.stringify(pagination)}
      data-loop={loop}
      data-grab-cursor={grabCursor}
      data-speed={speed}
    >
      {children}
    </div>
  ),
  SwiperSlide: ({ children }) => <div data-testid="swiper-slide">{children}</div>,
}));



describe('HeroCarousel Component', () => {
  it('renders a Swiper with the correct configuration', () => {
    render(<HeroCarousel />);
    const swiper = screen.getByTestId('swiper');
    expect(swiper).toHaveAttribute('data-class', 'hero-carousel-container');
    expect(swiper).toHaveAttribute(
      'data-modules',
      JSON.stringify(['navModule', 'pagModule', 'a11yModule'])
    );
    expect(swiper).toHaveAttribute('data-space-between', '0');
    expect(swiper).toHaveAttribute('data-navigation', 'true');
    expect(swiper).toHaveAttribute(
      'data-pagination',
      JSON.stringify({ clickable: true, dynamicBullets: true })
    );
    expect(swiper).toHaveAttribute('data-loop', 'true');
    expect(swiper).toHaveAttribute('data-grab-cursor', 'true');
    expect(swiper).toHaveAttribute('data-speed', '2000');
  });

  it('renders exactly three slides', () => {
    render(<HeroCarousel />);
    const slides = screen.getAllByTestId('swiper-slide');
    expect(slides).toHaveLength(3);
  });

  it('renders the first slide content correctly', () => {
    render(<HeroCarousel />);
    const first = screen.getAllByTestId('swiper-slide')[0];
    const { getByText, getByRole } = within(first);

    expect(getByText(/OUR ALL-TIME FAVOURITES/i)).toBeInTheDocument();
    expect(getByText('Blouses & Tops')).toBeInTheDocument();
    expect(
      getByText(
        /The bedding was hardly able to cover it and seemed ready to slide off any moment\./i
      )
    ).toBeInTheDocument();
    expect(getByRole('button', { name: /DISCOVER MORE/i })).toBeInTheDocument();
  });

  it('renders the second slide content correctly', () => {
    render(<HeroCarousel />);
    const second = screen.getAllByTestId('swiper-slide')[1];
    const { getByText, getByRole } = within(second);

    expect(getByText('BLUE & WHITE')).toBeInTheDocument();
    expect(getByText('Linen and Denim')).toBeInTheDocument();
    expect(getByRole('button', { name: /START SHOPPING/i })).toBeInTheDocument();
  });

  it('renders the third slide content correctly', () => {
    render(<HeroCarousel />);
    const third = screen.getAllByTestId('swiper-slide')[2];
    const { getByText, getByRole } = within(third);

    expect(getByText('SNEAKERS')).toBeInTheDocument();
    expect(getByText(/For every\s*occasion/i)).toBeInTheDocument();
    expect(getByRole('button', { name: /START SHOPPING/i })).toBeInTheDocument();
  });
});
