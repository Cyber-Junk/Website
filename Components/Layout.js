import Head from 'next/head';
import { Html } from 'next/document';
import React from 'react';
import Sidebar from './Sidebar';
import { Flex } from '@chakra-ui/react';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>CyberJunk</title>
                <link rel="shortcut icon" href="/favicon.png" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Flex flexDir={['column', 'column', 'row', 'row']}>
                <Sidebar />
                {children}
            </Flex>
        </>
    );
}