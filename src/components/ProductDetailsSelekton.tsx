import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const ProductDetailsSelekton = () => {
  return (
    <Box padding="5"  bg="gray.700" rounded={"lg"}>
        <Skeleton height={"200px"}/>
        <SkeletonText mt={4} mx={"auto"} noOfLines={1} maxW={"200px"}/>
        <SkeletonText mt={4} noOfLines={3} />
        <SkeletonText mt={4} noOfLines={1}/>
        <Skeleton mt={4} w={"full"} height={"50px"} rounded={"lg"}/>
    </Box>
  );
};

export default ProductDetailsSelekton;
