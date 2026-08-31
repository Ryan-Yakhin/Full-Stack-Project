import { Box, Container, Heading, useColorModeValue, VStack, Input, Button, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useProductStore } from '../store/product';

const CreatePage = () => {
  
  const [newProduct, setNewProdcut] = useState({
    name:"",
    price:"",
    image:""
  });

  const toast = useToast()
  const {createProduct} = useProductStore();

  const handleAddProduct = async() => {
    const {success, message} = await createProduct(newProduct);
    if(!success){
      toast({
        title:"Error",
        description: message,
        status: "error", 
        isClosable: true
      })
    } else{
      toast({
        title:"Success",
        description: message,
        status: "success", 
        isClosable: true
      })
    }
    setNewProdcut({name:"", price:"", image:""});
  }
  
  return (
    <div>
      <Container maxW={"container.sm"}>
        <VStack spacing={8}>
          <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
            Create New Product
          </Heading>

          <Box w={"full"} bg={useColorModeValue("white","gray.800")} p={6} rounded={"lg"} shadow={"md"}>
            <VStack spacing={4}>
              <Input 
                placeholder='Product Name'
                name='name'
                value={newProduct.name}
                onChange={(e) => setNewProdcut({...newProduct, name: e.target.value})}
              />
              <Input 
                placeholder='Product Price'
                name='price'
                value={newProduct.price}
                onChange={(e) => setNewProdcut({...newProduct, price: e.target.value})}
              />
              <Input 
                placeholder='Image URL'
                name='image'
                value={newProduct.image}
                onChange={(e) => setNewProdcut({...newProduct, image: e.target.value})}
              />

              <Button colorScheme="blue" onClick={handleAddProduct} w={"full"}>
                Add Product
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </div>
  );
};

export default CreatePage;
