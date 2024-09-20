import Header from '../common/header';
import BreadCrumbSection from '../shop/bread-crumb-section';
import Footer from '../common/footer';
import { BreadCrumbItem, Role, User } from '@/types';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminSidebar from './admin-sidebar';
import { useEffect } from 'react';

const AdminDashboard = () => {
  const authUser = useAuthUser<User>();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(authUser);
    if (!authUser || !authUser.roles.includes(Role.admin)) {
      navigate('/');
    }
  }, []);

  const breadCrumbItems: BreadCrumbItem[] = [
    {
      title: 'Dashboard',
      url: '/',
      icon: 'fa fa-home',
    },
    {
      title: 'Admin',
      url: '/products',
      icon: 'fa fa-user',
    },
  ];

  return (
    <>
      <Header />
      <BreadCrumbSection breadCrumbItems={breadCrumbItems} />
      <section className="leftsidebar">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <AdminSidebar />
            </div>
            <div className="col-lg-9">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminDashboard;
