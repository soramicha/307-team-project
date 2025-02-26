import { Center, Box, Text, Button, Select, Input, InputGroup, InputRightElement, Flex } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '@/context/AuthContext';
import { Search } from 'lucide-react';
import FileUpload from '@/components/ui/FileUpload';

function CreateListing() {
    const [photos, setPhotos] = useState([]);
    const [videos, setVideos] = useState([]);
    
    const conditions = ["Brand New", "Like New", "Gently Used", "Fair Condition", "Needs Repair"]

    return (
        <Box h="100vh" w="100vw" bg="white">
            <Center>
                <Box mt={150} w={{ base: "90%", md: "80%", lg: "60%" }}>
                    <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
                        <Text fontWeight="bold" fontSize="2xl">Create New Listing</Text>
                        <Button mt={{ base: 4, md: 0 }} color="white" bg="#2E55C4">Post Listing</Button>
                    </Flex>
                    <Flex mt={10} direction={{ base: "column", md: "row" }}>
                        <Box flex="1">
                            <Text fontSize="sm">Item Name</Text>
                            <Input
                                borderWidth={1}
                                borderRadius="10px"
                                color="#989898"
                                backgroundColor="white"
                                mt={1}
                                width="100%"
                                type="text"
                            />

                            <Text fontSize="sm" mt={5}>Category</Text>
                            <Input
                                borderWidth={1}
                                borderRadius="10px"
                                color="#989898"
                                backgroundColor="white"
                                mt={1}
                                width="100%"
                                type="text"
                            />

                            <Text fontSize="sm" mt={5}>Description</Text>
                            <Input
                                borderWidth={1}
                                borderRadius="10px"
                                color="#989898"
                                backgroundColor="white"
                                mt={1}
                                width="100%"
                                type="text"
                            />

                            <Flex direction={{ base: "column", md: "row" }} mt={5}>
                                <Box flex="1">
                                    <Text fontSize="sm">Price</Text>
                                    <Input
                                        borderWidth={1}
                                        borderRadius="10px"
                                        color="#989898"
                                        backgroundColor="white"
                                        mt={1}
                                        width="100%"
                                        type="text"
                                    />
                                </Box>
                                <Box flex="1" mt={{ base: 5, md: 0 }} ml={{ md: 5 }}>
                                    <Text fontSize="sm">Condition</Text>
                                    <Select 
                                        borderWidth={1}
                                        borderRadius="10px" 
                                        mt={1}
                                        width="100%"
                                    >
                                        {conditions.map((condition, index) => (
                                            <option key={index} value={condition}>{condition}</option>
                                        ))}    
                                    </Select>
                                </Box>
                            </Flex>

                            <Text fontSize="sm" mt={5}>Location</Text>
                            <Input
                                borderWidth={1}
                                borderRadius="10px"
                                color="#989898"
                                backgroundColor="white"
                                mt={1}
                                width="100%"
                                type="text"
                            />
                        </Box>
                        <Box flex="1" mt={{ base: 10, md: 0 }} ml={{ md: 10 }}>
                            <FileUpload label="Photos" accept=".jpg, .png, .jpeg" onChange={setPhotos} />
                            <FileUpload label="Videos" accept="video/*" onChange={setVideos} />
                            <Text fontSize="sm" mt={5}>Tags</Text>
                            <InputGroup width="100%">
                                <InputRightElement pointerEvents="none" mt={1}>
                                    <Search color="#989898" />
                                </InputRightElement>
                                <Input
                                    borderWidth={1}
                                    borderRadius="10px"
                                    color="#989898"
                                    backgroundColor="white"
                                    mt={1}
                                    width="100%"
                                    type="text"
                                />
                            </InputGroup>
                        </Box>
                    </Flex>
                </Box>
            </Center>
        </Box>
    );
}

export default CreateListing;