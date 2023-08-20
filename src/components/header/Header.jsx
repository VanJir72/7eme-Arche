import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown"
import NavItem from "react-bootstrap/NavItem"
import NavLink from "react-bootstrap/NavLink"

/****************************************([{ NEW NAVBAR}])****************************************/
function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="body-tertiary"
      variant="light"
      bg="warning"
    >
      <Container>
        <Navbar.Brand href="#home">Septiem Arche</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Accueil</Nav.Link>
            <Nav.Link href="#pricing">Espace Client</Nav.Link>

            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink}>Categories</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Livres</Dropdown.Item>
                <Dropdown.Item>Dvds</Dropdown.Item>
                <Dropdown.Item>Regarde le CdC-1- pour autres categories</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown> */}

          


          </Nav>
          <Nav>
            <Nav.Link href="#deets">CONNEXION</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              PANIER
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

/****************************************([{ OLD NAVBAR}])****************************************/
// import { useSelector } from 'react-redux';
// import { Link, useLocation } from 'react-router-dom';
// import useCartItemsCount from '../../hooks/useCartItemsCount';

// import styles from './Navbar.module.css';

// const Navbar = () => {

//   const location = useLocation();
//   const categories = useSelector(state => state.categories.data);
//   const cartItemsCount = useCartItemsCount();

//   return (
//     <nav className="navbar navbar-expand-lg bg-light sticky-top">
//       <div className="container-fluid">
//         <Link to='/' className='navbar-brand'>
//           React App
//         </Link>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link to='/' className={`nav-link ${location.pathname === '/' && 'active'}`}>
//                 All products
//               </Link>
//             </li>
//             {categories.map(category => (
//               <li className="nav-item" key={category.id}>
//                 <Link
//                   to={`categories/${category.id}`}
//                   className={`nav-link ${location.pathname === `/categories/${category.id}` && 'active'}`}
//                 >
//                   {category.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <Link to='/cart'>
//             <div className={styles.cartWrapper}>
//               <span className={styles.cartCount}>
//                 {cartItemsCount}
//               </span>
//               <i className="bi bi-cart2" style={{ fontSize: "20px", cursor: 'pointer' }} />
//             </div>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar;
