import React from 'react';
import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AdditionalInformation from '../components/AdditionalInformation';

jest.mock('react-icons/fa', () => ({
  FaStar: ({ className }) => <span data-testid="star" className={className}>★</span>,
}));

describe('<AdditionalInformation />', () => {
  const product = { name: 'Test Tee', image: '/images/test-tee.webp' };

  it('shows the Description pane by default', () => {
    render(<AdditionalInformation product={product} />);

    const descTab = screen.getByRole('tab', { name: /Description/i });
    expect(descTab).toHaveClass('active');

    const desc = screen.getByTestId('desc-panel');
    const d = within(desc);

    expect(d.getByRole('heading', { name: /About/i })).toBeInTheDocument();

    const ul = d.getByRole('list');
    const items = within(ul).getAllByRole('listitem');
    const bulletTexts = items.map(li => li.textContent);
    expect(bulletTexts).toEqual(
      expect.arrayContaining([
        'He must have tried it a hundred times',
        "shut his eyes so that he wouldn't have to look",
        'at the floundering legs, and only stopped'
      ])
    );

    const img = d.getByRole('img', { name: product.name });
    expect(img).toHaveAttribute('src', product.image);
  });

  it('activates the Additional Information pane when clicked', async () => {
    render(<AdditionalInformation product={product} />);

    userEvent.click(screen.getByRole('tab', { name: /Additional Information/i }));
    const infoTab = screen.getByRole('tab', { name: /Additional Information/i });

    await waitFor(() => expect(infoTab).toHaveClass('active'));

    const info = screen.getByTestId('info-panel');
    const i = within(info);

    const labels = i.getAllByText('Product #');
    expect(labels.length).toBeGreaterThan(0);

    const details = i.getAllByText(/LOL But now I feel pain in reproaching\./);
    expect(details.length).toBeGreaterThan(0);
  });

  it('activates Reviews pane and shows 4 reviews × 5 stars', async () => {
    render(<AdditionalInformation product={product} />);

    userEvent.click(screen.getByRole('tab', { name: /Reviews/i }));
    const reviewsTab = screen.getByRole('tab', { name: /Reviews/i });

    await waitFor(() => expect(reviewsTab).toHaveClass('active'));

    const reviews = screen.getByTestId('reviews-panel');
    const r = within(reviews);

    ['Han Solo', 'Luke Skywalker', 'Princess Leia', 'Jabba Hut']
      .forEach(name => expect(r.getByRole('heading', { name })).toBeInTheDocument());

    const stars = r.getAllByTestId('star');
    expect(stars).toHaveLength(20);
  });

  it('lets you fill and submit the review form', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<AdditionalInformation product={product} />);

    userEvent.click(screen.getByRole('tab', { name: /Reviews/i }));
    const reviewsTab = screen.getByRole('tab', { name: /Reviews/i });
    await waitFor(() => expect(reviewsTab).toHaveClass('active'));

    const reviewsPane = screen.getByTestId('reviews-panel');
    const r = within(reviewsPane);

    await userEvent.type(r.getByLabelText(/Your name \*/i), 'Leia');
    await userEvent.selectOptions(r.getByLabelText(/Your rating \*/i), '3');
    await userEvent.type(r.getByLabelText(/Your email \*/i), 'leia@alderaan.org');
    await userEvent.type(r.getByLabelText(/Review text \*/i), 'A splendid journey.');

    userEvent.click(r.getByRole('button', { name: /POST REVIEW/i }));

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenLastCalledWith(
        'Form Submitted:',
        expect.objectContaining({
          name: 'Leia',
          rating: '3',
          email: 'leia@alderaan.org',
          review: 'A splendid journey.',
        })
      );
    });

    consoleSpy.mockRestore();
  });
});
