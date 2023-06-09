import { useState } from 'react';
import { useNavigate } from "react-router";
import { Navbar, NavDropdown, Nav, Container, Offcanvas, OffcanvasHeader } from 'react-bootstrap';
import '../../styles/App.css'
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';

export const Header = () => {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const [logged, setLogged] = useState('block');
  const [display, setDisplay] = useState('');
  const [show, setShow] = useState(true);
  // const userInfo =(user)

  const navbarToggle = document.querySelector('.navbar-toggler');
  const navbarDropdown = document.querySelectorAll('#offcanvasNavbar-expand')

  const closeOffcanvas = () => {
    setDisplay('none');
    navbarDropdown.closeOffcanvas;
    // navbarToggle.closeOffcanvas;
    navbarToggle.closest('Navbar.Toggle');
    setShow(false);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      setLogged(false);
      navigate("/admin");
    } catch (err) {
      console.log(err.message);
    };
  };

  // const handleClose = () => setShow(false);
  
  return (
    <>
      <OffcanvasHeader style={{display:{display}}}>
        {[false, 'lg'].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-0 header" fixed="top">
            <Container fluid>
              <Navbar.Brand><Link to="/" className="title home-h4"> Nadya Poklad </Link> </Navbar.Brand>

              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}   />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                >
                <Offcanvas.Body >
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Navbar.Text><Link to="/" className=" link link-header" onClick={closeOffcanvas}>Home</Link></Navbar.Text>
                    <Navbar.Text>
                      <Link to="/theartist" className=" link link-header" onClick={closeOffcanvas}>The Artist</Link>
                    </Navbar.Text>

                    <NavDropdown
                      title="Works"
                      className="link"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      onClick={closeOffcanvas}
                    >
                        <NavDropdown.Item className="link-dropdown link  link-header-dropdown " show={toString(show)} href="/works/pianist">
                          Pianist 
                        </NavDropdown.Item>
                        <NavDropdown.Item className="link-dropdown link link-header-dropdown" href="/works/composer">
                          Composer
                        </NavDropdown.Item>
                        <NavDropdown.Item className="link-dropdown link link-header-dropdown" href="/works/musical_event_organizer"> 
                          Musical Event Organizer
                        </NavDropdown.Item>
                        <NavDropdown.Item className="link-dropdown link link-header-dropdown" href="/works/teacher"> 
                          Teacher
                        </NavDropdown.Item>
                    </NavDropdown>

                    <Navbar.Text className="link"> <Link to="/performances" className="link link-header" onClick={closeOffcanvas}>Performances</Link></Navbar.Text>
                    <Navbar.Text className="link"><Link to="/upcoming_events" className="link link-header" onClick={closeOffcanvas}>Upcoming events</Link></Navbar.Text>
                    <Navbar.Text className="link"><Link to="/contact" className="link link-header" onClick={closeOffcanvas}>Contact</Link></Navbar.Text>
                    <Nav className="justify-content-end ">
                      {(user && user.email) &&
                        <>
                          <Navbar.Text className="link"> <Link to="/dashboard" className="link link-header">  Dashboard </Link> </Navbar.Text>
                          <Navbar.Text className="link" onClick={handleLogout} > Sign Out     </Navbar.Text>
                        </>
                      }
                    </Nav>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </OffcanvasHeader>
    </>
  )
}
export default Header;


