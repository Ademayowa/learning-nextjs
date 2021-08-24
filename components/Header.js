import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand='md' className='shadow-sm'>
      <Container fluid>
        <Navbar.Brand href='#home'>DJ Events</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>

          <Nav className={styles.link}>
            <Nav.Link href='#deets'>Events</Nav.Link>
            <Nav.Link href='#deets'>Login</Nav.Link>
            <Button variant='danger' className={styles.danger}>
              Post Job
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
