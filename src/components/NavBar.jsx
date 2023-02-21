import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react'
import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <>
            <Flex>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Categorías
                    </MenuButton>
                    <MenuList>
                        <MenuItem minH='48px'>
                            <Image
                                boxSize='2rem'
                                borderRadius='full'
                                src='http://d2r9epyceweg5n.cloudfront.net/stores/799/114/products/mesax5subir1-acc4bcfab03b7b803615313364362308-640-0.png'
                                alt='Mesas'
                                mr='12px'
                            />
                            <span>Mesas</span>
                        </MenuItem>
                        <MenuItem minH='40px'>
                            <Image
                                boxSize='2rem'
                                borderRadius='full'
                                src='http://www.gardenlife.com.ar/public/images/productos/producto_1721_1.jpg'
                                alt='Sillas'
                                mr='12px'
                            />
                            <span>Sillas</span>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />
                <CartWidget p='4' bg='green.400'>
                </CartWidget>
            </Flex>
        </>
    )
}

export default NavBar