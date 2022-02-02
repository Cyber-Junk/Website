import React from 'react';
import Sidebar from './Sidebar';
import {Flex} from '@chakra-ui/react';

function Layout({ children }) {
    return (
        <Flex flexDir={['column', 'column', 'row', 'row']} bg={'gray.800'} backgroundImage={'/main.png'} backgroundSize={'contain'} height={'100vh'}>
            <Sidebar />
            {children}
        </Flex>
    );
}

export default Layout;