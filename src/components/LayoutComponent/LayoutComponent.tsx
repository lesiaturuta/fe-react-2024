import { Outlet } from 'react-router-dom';

import FooterComponent from '@/components/footer/Footer.component.tsx';
import Header from '@/components/header/Header.component.tsx';

const LayoutComponent = ({ amountCart, changeTheme }: { amountCart: number; changeTheme: (name: string) => void }) => (
    <>
        <Header amountCart={amountCart} changeTheme={changeTheme} />
        <Outlet />
        <FooterComponent />
    </>
);
export default LayoutComponent;
