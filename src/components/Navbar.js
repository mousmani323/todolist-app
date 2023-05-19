// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  // const [search, setSearch] = useState('');

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };

  // const handleClick = () => {
  //   // Filter the todos based on the search query
  //   const filteredTodos = todos.filter((todo) =>
  //     todo.title.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setFilteredTodos(filteredTodos);
  // };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"> 
        <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          TO-DO App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              // value={search}
              // onChange={handleChange}
            />
            <Button variant="secondary" 
            // onClick={handleClick}
            >Search</Button>
          </Form>
      </Container>
    </Navbar>
    </>
  );
};

export default NavigationBar;
