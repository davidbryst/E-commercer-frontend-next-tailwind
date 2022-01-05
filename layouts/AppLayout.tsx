import type { FC } from 'react';
import AppBar from '../partials/AppBar';
import Footer from '../partials/Footer';
import CategoryGroup from '../groups/CategoryGroup';
import BottomTab from '../partials/BottomTab';

const AppLayout: FC = ({ children }) => {
    return (
        <>
            {/* <Header/> */}
            <div className="h-16">
                <AppBar />
            </div>
            <CategoryGroup />

            <main> {children} </main>
            <BottomTab />
            <Footer />
        </>
    );
};

export default AppLayout;
