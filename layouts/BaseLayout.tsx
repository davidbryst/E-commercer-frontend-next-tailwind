import React, {FC, ReactNode} from 'react';
import CategoryGroup from '../groups/CategoryGroup';
import BottomTab from '../partials/BottomTab';
import Footer from '../partials/Footer';
import AppBar from '../partials/AppBar';


interface IBaseLayoutProps {
    children: ReactNode
}

const BaseLayout: FC<IBaseLayoutProps> = ({children}) => {
    return (
        <>
            {/* <Header/> */}
            <div className="h-16">
                <AppBar />
            </div>

            <main> {children} </main>
            <BottomTab />
            <Footer />
        </>
    );
};

export default BaseLayout;
