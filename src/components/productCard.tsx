import { Button, Card, Image, Link, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

export const ProductCard = () => {
  const { colorMode } = useColorMode();

  return (
    <Card.Root
      maxW="sm"
      overflow="hidden"
      border={"1px solid #a8b5c8"}
      bg={"none"}
      p={2}
    >
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
        boxSize={"200px"}
        borderRadius={"full"}
        mx={"auto"}
        objectFit={"cover"}
      />
      <Card.Body gap="2">
        <Card.Title
          fontSize={"lg"}
          textTransform={"capitalize"}
          textAlign={"center"}
          mb={2}
        >
          Living room Sofa
        </Card.Title>
        <Card.Description fontSize={"sm"} textAlign={"center"}>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces.
        </Card.Description>
        <Text
          textStyle="3xl"
          fontWeight="medium"
          color={"purple.600"}
          textAlign={"center"}
          letterSpacing="tight"
          mt="2"
        >
          $450
        </Text>

        <Button
          variant="outline"
          as={Link} 
          border={"none"}
          size={"xl"}
          py={"5"}
          overflow={"hidden"}
          w={"full"}
          mt={6}
          bg={colorMode == "light" ? "#e6f3fd" : "#9f7aea"}
          color={colorMode != "light" ? "#e6f3fd" : "#9f7aea"}
          _hover={{
            bg: colorMode != "light" ? "#e6f3fd" : "#9f7aea",
            color: colorMode == "light" ? "#e6f3fd" : "#9f7aea",
            border: "transparent",
          }}
        >
          View Details
        </Button>
      </Card.Body>
    </Card.Root>
  );
};
