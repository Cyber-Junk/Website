import { useRouter } from 'next/router';
import Link from 'next/link';
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import {
    FiHome,
    FiMenu,
} from 'react-icons/fi';
import { BsCalendar2Event } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdContacts } from 'react-icons/md';
import { SiGithubsponsors } from 'react-icons/si';

const LinkItems = [
    { name: 'Home', icon: FiHome, href: "/" },
    { name: 'Events', icon: BsCalendar2Event, href: "/illustrations" },
    { name: 'Team', icon: HiOutlineUserGroup, href: "/icons" },
    { name: 'Sponsors', icon: SiGithubsponsors, href: "/sponsors" },
    { name: 'Contact Us', icon: MdContacts, href: "/vectors" },
];

export default function Sidebar({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent bg={'transparent'}>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <MobileNav display={{ md: 'none', base: (!isOpen ? 'flex' : 'none') }} onOpen={onOpen} position={'fixed'} zIndex={2} w={"100%"} bg={'transparent'} style={{ backdropFilter: "blur(10px)" }} />
            <Box ml={{ base: 0, md: 60 }}>
                {children}
            </Box>
        </Box>
    );
}

const SidebarContent = ({ onClose, ...rest }) => {
    return (
        <Flex
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            flexDir={'column'}
            justifyContent={'space-between'}
            style={{ backdropFilter: "blur(10px)" }}
            {...rest}
        >
            <Box>
                <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                    <Text fontSize="2xl" fontWeight="bold" color={'white'}>
                        CyberJunk
                    </Text>
                    <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} color={'white'} />
                </Flex>
                {LinkItems.map((link) => (
                    <NavItem key={link.name} icon={link.icon} href={link.href}>
                        {link.name}
                    </NavItem>
                ))}
            </Box>
        </Flex>
    );
};

const NavItem = ({ icon, children, href, ...rest }) => {
    const router = useRouter();
    return (
        <Link href={href} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} passHref>
            <Flex
                align="center"
                p="4"
                mx="4"
                my="2"
                borderRadius="lg"
                fontSize="md"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'white',
                    color: 'black',
                }}
                bg={router.pathname == href ? 'white' : 'transparent'}
                color={router.pathname == href ? 'black' : 'white'}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="18"
                        _hover={{
                            color: 'black',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

const MobileNav = ({ onOpen, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                color={'white'}
                icon={<FiMenu />}
            />
            <Text fontSize="2xl" ml="8" fontWeight="bold" color={'white'}>
                CyberJunk
            </Text>
        </Flex>
    );
};