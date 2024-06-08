import { Outlet } from 'react-router-dom';

import FooterComponent from '@/components/footer/Footer.component.tsx';
import Header from '@/components/header/Header.component.tsx';

const LayoutComponent = ({
    theme,
    amountCart,
    changeTheme,
}: {
    theme: string;
    amountCart: number;
    changeTheme: (name: string) => void;
}) => (
    <>
        <Header amountCart={amountCart} theme={theme} changeTheme={changeTheme} />
        <Outlet />
        <FooterComponent theme={theme} />
    </>
);
export default LayoutComponent;
