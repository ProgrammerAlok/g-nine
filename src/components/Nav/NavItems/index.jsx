import { Text } from 'components';
import { NavLink } from 'react-router-dom';

const NavItems = () => {
    const Data = [
      `Home`,
      `About Us`,
      `Rooms`,
      `Banquet`,
      `Restaurant`,
      `Events`,
      `FAQ's`,
      `Contact Us`,
    ].map((item, ind) => ({
      title: item,
      path: `/${(ind===0)?'':item.split(' ').join('').toLowerCase()}`
    }));

    return (
      <>        
        {Data.map(({title, path}, key) => (
          <li key={key} className="">
            <NavLink to={path} >
              <Text as="p" className="text-gray-300_04">
                {title}
              </Text>
            </NavLink>
          </li>
        ))}        
      </>
    );
  }  
export default NavItems