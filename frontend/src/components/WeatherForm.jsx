import React from "react";
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Heading, Flex, Divider, Spacer, Box } from "@chakra-ui/react";

const WeatherForm = () => {
    return (
        <Flex
            justifyContent="center">
            <Form>
                <Row>
                    <Spacer>
                    </Spacer>
                    <Col>
                        <Form.Control placeholder="10001"/>
                    </Col>
                    <Spacer>
                    </Spacer>
                    <Col>
                        <Form.Control placeholder="US"/>
                    </Col>
                    <Spacer>
                    </Spacer>
                    <Col>
                        <Button variant="primary" type="submit">
                            Get
                        </Button>
                    </Col>
                    <Spacer>
                    </Spacer>
                </Row>
            </Form>
        </Flex>
    );
};

export default WeatherForm;