import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavMenuOff from '../components/NavMenuOff';

jest.mock('react-bootstrap', () => {
  const Collapse = ({ in: open, children }) => (open ? <div>{children}</div> : null);
  const Offcanvas = ({ show, onHide, children }) =>
    show ? (
      <div data-testid="offcanvas">
        <button aria-label="close" onClick={onHide} />
        {children}
      </div>
    ) : null;
  Offcanvas.Header = () => null;
  Offcanvas.Title = ({ children }) => <div>{children}</div>;
  const Button = ({ children, ...props }) => <button {...props}>{children}</button>;
  const Nav = () => null;
  Nav.Link = ({ children, ...props }) => <a {...props}>{children}</a>;
  const Navbar = ({ children, ...props }) => <div {...props}>{children}</div>;
  Navbar.Brand = ({ children, ...props }) => <span {...props}>{children}</span>;
  return { Navbar, Nav, Collapse, Button, Offcanvas };
});

jest.mock('react-icons/io', () => ({
  IoIosArrowDown: () => <span data-testid="down-icon" />,
  IoIosArrowUp: () => <span data-testid="up-icon" />
}));


describe('NavMenuOff Component', () => {
  const handleShow = jest.fn();
  const handleClose = jest.fn();
  let setOpen;

  beforeEach(() => {
    setOpen = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders toggle button and calls handleShow when clicked', () => {
    render(
      <NavMenuOff
        show={false}
        open={false}
        setOpen={setOpen}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    );

    const toggleButton = screen.getByRole('button', { name: 'extra menu' });
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(handleShow).toHaveBeenCalledTimes(1);
  });

  it('does not display Offcanvas content when show is false', () => {
    render(
      <NavMenuOff
        show={false}
        open={false}
        setOpen={setOpen}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    );
    expect(screen.queryByText('Varkala')).not.toBeInTheDocument();
  });

  it('renders Offcanvas with menu items when show is true', () => {
    render(
      <NavMenuOff
        show={true}
        open={false}
        setOpen={setOpen}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    );

    expect(screen.getByText('Varkala')).toBeInTheDocument();
    ['Home', 'Link', 'Disabled', 'Dropdown link'].forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    expect(screen.getByText('020-800-456-747')).toBeInTheDocument();

    expect(screen.getByText(/Samsa was a travelling salesman/)).toBeInTheDocument();
  });

  it('calls handleClose when Offcanvas close button is clicked', () => {
    render(
      <NavMenuOff
        show={true}
        open={false}
        setOpen={setOpen}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    );

    const closeButton = screen.getByLabelText('close');
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('toggles dropdown content and icons when Dropdown link is clicked', () => {
    const { rerender } = render(
      <NavMenuOff
        show={true}
        open={false}
        setOpen={setOpen}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    );

    expect(screen.getByTestId('down-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('up-icon')).not.toBeInTheDocument();
    expect(screen.queryByText('Action')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Dropdown link'));
    expect(setOpen).toHaveBeenCalledWith(true);

    rerender(
      <NavMenuOff
        show={true}
        open={true}
        setOpen={setOpen}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    );

    expect(screen.getByTestId('up-icon')).toBeInTheDocument();
    ['Action', 'Another action', 'Something else here'].forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });
});
