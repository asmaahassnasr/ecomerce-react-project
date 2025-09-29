import { useNavigate, useParams } from "react-router-dom";
import { useColorMode } from "./ui/color-mode";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import ProductDetailsSelekton from "./ProductDetailsSelekton";
import { Box, Button, Card, Flex, Text,Image } from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  const getProductList = async () => {
    const data = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/products/${id}?populate=category&populate=thumbnail`
    );
    return data;
  };

  const qry = useQuery({
    queryKey: ["products", id],
    queryFn: getProductList,
  });
  const goBack = () => navigate(-1);

  const prod = qry?.data?.data.data;

  useEffect(() => {
    document.title = `Product Store | Product ${prod?.title} Page `;
  }, []);

  if (qry.isLoading) {
    return (
      <Box mx={"auto"} maxW={"sm"} my={20}>
        <ProductDetailsSelekton />
      </Box>
    );
  }
  return (
    <>
      <Flex
        alignItems={"center"}
        maxW={"sm"}
        mx={"auto"}
        my={7}
        fontSize={"lg"}
        cursor={"pointer"}
        onClick={goBack}
      >
        <BsArrowLeft />
        <Text ml={2}>Back</Text>
      </Flex>

      
          <Card.Root
          maxW={"md"} mx={"auto"}
            overflow="hidden"
            border={"1px solid #a8b5c8"}
            bg={"none"}
            p={2}
          >
            <Image
              src={`${import.meta.env.VITE_SERVER_URL}${prod?.thumbnail.url}`}
              alt="Green double couch with wooden legs" 
              height={"200px"}
              w={"full"} 
              borderRadius={"lg"}
            />
            <Card.Body gap="2">
              <Card.Title
                fontSize={"lg"}
                textTransform={"capitalize"}
                textAlign={"center"}
                mb={2}
              >
               {prod?.title}
              </Card.Title>
              <Card.Description fontSize={"sm"} textAlign={"center"}>
                {prod?.description}
              </Card.Description>
              {prod?.category&& 
              <Text
                textStyle="3xl"
                fontWeight="medium"
                textAlign={"center"}
                letterSpacing="tight"
                mt="2"
              >
                {prod?.category.title }
              </Text>
               }
              
              <Text
                textStyle="3xl"
                fontWeight="medium"
                color={"purple.600"}
                textAlign={"center"}
                letterSpacing="tight"
                mt="2"
              >
                ${prod?.price}
              </Text>
      
              <Button
                variant="outline"
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
          
    </>
  );
};

export default ProductDetails;
