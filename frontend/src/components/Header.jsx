import React from "react";
import { Heading, Flex, Divider, Spacer, Box } from "@chakra-ui/react";

const title = 'OpenWeatherMap Wrapper'
const text = 'This is a simple, single page webapp, built on FastAPI & React, that lets you get a weather forecast for the upcoming week, based on your zipcode. Enjoy!'

const Header = () => {
  return (
    <Flex
      align="center"
      justifyContent="center"
    >
      <div className="px-4 py-5 my-5 text-center">
          <h1 
          className="display-5 fw-bold text-body-emphasis">{title}</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">{text}</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            </div>
          </div>
        </div>
    </Flex>
  );
};

export default Header;