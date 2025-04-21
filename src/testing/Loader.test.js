import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from '../components/Loader';

describe('Loader Component', () => {
  test('renders overlay with loader-animation class', () => {
    render(<Loader />);
    const overlay = screen.getByTestId('loader-overlay');
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass('loader-animation');
  });

  test('contains a loader element with the .loader class', () => {
    render(<Loader />);
    const loaderElement = screen.getByTestId('loader-indicator');
    expect(loaderElement).toBeInTheDocument();
    expect(loaderElement).toHaveClass('loader');
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="loader-animation"
          data-testid="loader-overlay"
        >
          <div
            class="loader"
            data-testid="loader-indicator"
          />
        </div>
      </DocumentFragment>
    `);
  });
});
