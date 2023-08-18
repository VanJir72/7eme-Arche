
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import useCartItemsCount from '../../hooks/useCartItemsCount';

import styles from './Navbar.module.css';




const Navbar = () => {

  const location = useLocation();
  const categories = useSelector(state => state.categories.data);
  const cartItemsCount = useCartItemsCount();

  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container-fluid">
        <Link to='/' className='navbar-brand'>
          7 èmè Arche
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className={`nav-link ${location.pathname === '/' && 'active'}`}>
                All products
              </Link>
            </li>
            {categories.map(category => (
              <li className="nav-item" key={category.id}>
                <Link
                  to={`categories/${category.id}`}
                  className={`nav-link ${location.pathname === `/categories/${category.id}` && 'active'}`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>



          <Link to='/cart'>
            <div className={styles.cartWrapper}>
              <span className={styles.cartCount}>
                {cartItemsCount}
              </span>
              <i className="bi bi-cart2" style={{ fontSize: "20px", cursor: 'pointer' }} />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;