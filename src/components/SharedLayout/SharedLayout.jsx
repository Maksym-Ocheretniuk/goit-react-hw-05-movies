import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Main, Navigation, StyledNavLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Navigation>
      </Header>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default SharedLayout;
