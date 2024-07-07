import { Outlet } from 'react-router-dom';

import FooterComponent from '@/components/footer/Footer.component.tsx';
import Header from '@/components/header/Header.component.tsx';

const LayoutComponent = ({
    amountCart,
    isAuthorized,
    changeTheme,
}: {
    amountCart: number;
    isAuthorized: boolean;
    changeTheme: (name: string) => void;
}) => (
    <>
        <Header amountCart={amountCart} isAuthorized={isAuthorized} changeTheme={changeTheme} />
        <Outlet />
        <FooterComponent />
    </>
);
export default LayoutComponent;
