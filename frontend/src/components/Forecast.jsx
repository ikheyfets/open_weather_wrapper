import React, { useEffect, useState } from "react";
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Heading, Flex, Divider, Spacer, Box } from "@chakra-ui/react";


const Forecast = () => {
    const defaultZipCode = '10001';

    const [zipCode, setZipCode] = useState(defaultZipCode);
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(zipCode)
            const response = await fetch('http://localhost:8000/?zip_code='+zipCode);
            const data = await response.json();
            setResponse(data.forecast);
            console.log(data)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (

        <Flex
            justifyContent="center"
            flexDirection="column"
            alignContent="space-between">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Spacer>
                    </Spacer>
                    <Col>
                        <Form.Control placeholder="10001" onChange={(e) => setZipCode(e.target.value)}/>
                    </Col>
                    <Spacer>
                    </Spacer>
                    <Col>
                        <Form.Control placeholder="US"/>
                    </Col>
                    <Spacer>
                    </Spacer>
                    <Col>
                        <Button variant="outline-primary" type="submit">
                            Get
                        </Button>
                    </Col>
                    <Spacer>
                    </Spacer>
                </Row>
            </Form>
            <Spacer></Spacer>
            <Flex >
                {JSON.stringify(response)}
            </Flex>
        </Flex>
    );
};


export default Forecast;