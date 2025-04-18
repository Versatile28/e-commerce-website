const React = require('react');

module.exports = {
  MemoryRouter: ({ children }) => <>{children}</>,
  Link: ({ to, children, ...rest }) =>
    React.createElement('a', { href: to, 'data-testid': 'mock-link', ...rest }, children),
};
