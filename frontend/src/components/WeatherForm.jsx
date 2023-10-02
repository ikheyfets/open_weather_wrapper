import React from "react";
import Form from 'react-bootstrap/Form';
import { Heading, Flex, Divider, Spacer, Box, Button } from "@chakra-ui/react";

const WeatherForm = () => {
    return (
        <Flex
            align="center"
            justifyContent="center"
            >

            <Form className="d-flex">
            
                <Spacer></Spacer>
                <Box>
                    <label for="zip">Zip Code:</label>
                    <input type="zip" id="zip" placeholder="Enter zip code" name="zip"/>
                </Box>
                <Spacer></Spacer>
                <Box>
                    <label for="country">Country:</label>
                    <input type="country" id="country" placeholder="US" name="country"/>
                </Box>
                <Spacer></Spacer>
                <Button 
                    colorScheme="teal"
                    variant="outline"
                    size="md">
                        Get
                </Button>
                <Spacer></Spacer>
            </Form>

        </Flex>
    );
};

export default WeatherForm;