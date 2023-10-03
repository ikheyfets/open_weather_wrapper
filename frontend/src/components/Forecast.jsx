import React, { useEffect, useState } from "react";
import { Form, Col, Row, Button, Table, Container } from 'react-bootstrap';
import { Heading, Flex, Divider, Spacer, Box } from "@chakra-ui/react";


const Forecast = () => {
    const defaultZipCode = '10001';

    const [zipCode, setZipCode] = useState(defaultZipCode);
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/?zip_code='+zipCode);
            const data = await response.json();
            setResponse(data.forecast);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    function dataTable (response) {
        console.log(response != '')
        if (response != "") {
            return (
                <Table striped bordered responsive size="sm" variant="white" className="table">
                    <thead>
                        <th>Date</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Rain</th>
                    </thead>
                    <tbody>
                        {
                            response.map(
                                item =>
                                <tr>
                                    <td>{item.date}</td>
                                    <td>{item.tmax}</td>
                                    <td>{item.tmin}</td>
                                    <td>{item.rain}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            )
        } else {

            return (
                <Box></Box>
            )
        }
    };

    return(
        <Flex
            justifyContent="space-between"
            flexDirection="column">
            <Form onSubmit={handleSubmit} className="form">
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

            <Box p="10%">
                {dataTable(response)}
            </Box>
        </Flex>
    );
};


export default Forecast;