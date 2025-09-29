import {
  Box,
  Flex,
  Button,
  Stack,
  Menu,
  Avatar,
  Portal,
  HStack,
  Link,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, useColorModeValue } from "../ui/color-mode";
import { NavLink, useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const MyNavLink = (props: Props) => {
  const { children } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    if (typeof children === "string") {
      const path = "/" + children.toLowerCase();
      navigate(path);
    }
  };

  return (
    <Box
      as={Link}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      onClick={handleClick}
      cursor="pointer"
    >
      {children}
    </Box>
  );
};

const Links = ["products", "about"];

export default function Navbar() {
  
  const { open, onOpen, onClose } = useDisclosure()
  
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={'md'}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={open ? onClose : onOpen}
          >{open ? <CloseIcon /> : <HamburgerIcon />} </IconButton>

          <HStack alignItems={"center"}>
            <NavLink  to="/">My App</NavLink>
            <HStack mx={5} as={"nav"} display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <MyNavLink key={link}>{link}</MyNavLink>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} px={5}>
              <Button
                onClick={toggleColorMode}
                mx={3}
                bg={"transparent"}
                color={"gray.400"}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu.Root positioning={{ placement: "right-end" }}>
                <Menu.Trigger rounded="full" focusRing="outside">
                  <Avatar.Root size="sm">
                    <Avatar.Fallback name="Segun Adebayo" />
                    <Avatar.Image src="https://bit.ly/sage-adebayo" />
                  </Avatar.Root>
                </Menu.Trigger>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      <Menu.Item value="account">Account</Menu.Item>
                      <Menu.Item value="settings">Settings</Menu.Item>
                      <Menu.Item value="logout">Logout</Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
            </Stack>
          </Flex>
        </Flex>


        {open ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'}>
              {Links.map((link) => (
                <MyNavLink key={link}>{link}</MyNavLink>
              ))}
            </Stack>
          </Box>
        ) : null}

      </Box>
    </>
  );
}
