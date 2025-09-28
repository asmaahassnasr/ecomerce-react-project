import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const ProductSkeleton = () => {
  return (
    <Box padding="6" boxShadow="lg" bg="gray.600" rounded={"lg"}>
      <SkeletonCircle size="40" mx={"auto"} />
      <SkeletonText mt="4" noOfLines={4} w={"inherit"} mx={"auto"} />
    </Box>
  );
};

export default ProductSkeleton;
