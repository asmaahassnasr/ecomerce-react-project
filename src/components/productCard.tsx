import { Button, Card, Image, Link, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import type { IProduct } from "@/interfaces";
import { useNavigate } from "react-router-dom";

interface IProps{
    product: IProduct
}

export const ProductCard = ({product}:IProps) => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <Card.Root
      overflow="hidden"
      border={"1px solid #a8b5c8"}
      bg={"none"}
      p={2}
    >
      <Image
        src={`${import.meta.env.VITE_SERVER_URL}${product.thumbnail.url}`}
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
         {product.title}
        </Card.Title>
        <Card.Description fontSize={"sm"} textAlign={"center"}>
          {product.description}
        </Card.Description>
        <Text
          textStyle="3xl"
          fontWeight="medium"
          color={"purple.600"}
          textAlign={"center"}
          letterSpacing="tight"
          mt="2"
        >
          ${product.price}
        </Text>

        <Button
          variant="outline"
          as={Link} 
          onClick={() => navigate(`/product/${product.documentId}`)}
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
