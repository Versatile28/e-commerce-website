import React from 'react';
import { render, screen, within } from '@testing-library/react';
import HistorySection from '../components/HistorySection';

describe('HistorySection Component', () => {
  test('renders the section title', () => {
    render(<HistorySection />);
    expect(screen.getByRole('heading', { name: /our history/i })).toBeInTheDocument();
  });

  test('renders both content paragraphs', () => {
    render(<HistorySection />);
    expect(screen.getByText(/One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections./i)).toBeInTheDocument();
    expect(screen.getByText(/He must have tried it a hundred times, shut his eyes so that he wouldn’t have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before./i)).toBeInTheDocument();
  });

  test('section contains heading and paragraph', () => {
    render(<HistorySection />);

    const section = screen.getByRole('region', { name: /our history/i });
    const utils = within(section);

    expect(utils.getByRole('heading', { name: /our history/i })).toBeInTheDocument();
    expect(utils.getByText(/One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections./i)).toBeInTheDocument();
  });
});
