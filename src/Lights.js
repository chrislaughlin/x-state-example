import React from 'react';
import { Button, Stack } from "@chakra-ui/core";

const Lights = () => {
    return (
        <Stack
            justifyContent="center"
            width="100%"
            alignItems="center"
            spacing="10"
        >
            <Button
                variantColor="green"
                borderRadius="50px"
                size="lg"
            />
            <Button
                variantColor="yellow"
                borderRadius="50px"
                size="lg"
            />
            <Button
                variantColor="red"
                borderRadius="50px"
                size="lg"
            />
        </Stack>
    );
};

Lights.propTypes = {};

export default Lights;

