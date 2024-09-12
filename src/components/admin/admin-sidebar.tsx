import { sidebarLinks } from '@/constants';
import { NavMenuItem } from '@/types';
import { NavLink, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="flex flex-col gap-11">
        <ul className="flex flex-col gap-2">
          {sidebarLinks.map((link: NavMenuItem) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && 'bg-gray-300'
                }`}
              >
                <NavLink
                  to={link.route}
                  className="flex items-center gap-4 p-2"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && 'invert-white'
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default AdminSidebar;
