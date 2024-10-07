import { sidebarLinks } from '@/constants';
import { NavMenuItem, User } from '@/types';
import { NavLink, useLocation } from 'react-router-dom';

const AdminSidebar = ({ user }: { user: User }) => {
  const { pathname } = useLocation();

  const allowedSidebarLinks = sidebarLinks.filter((link) =>
    user?.roles.some((role) => link.roles.includes(role))
  );
  console.log(user);
  console.log(allowedSidebarLinks);

  return (
    <>
      <nav className="flex flex-col gap-11">
        <ul className="flex flex-col gap-2">
          {allowedSidebarLinks.map((link: NavMenuItem) => {
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
                    className={`group-hover:invert-white h-auto w-6 ${
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
