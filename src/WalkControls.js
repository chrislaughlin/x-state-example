import React from 'react';
import PropTypes from 'prop-types';
import { Button, Stack } from "@chakra-ui/core";

const WalkControls = () => {
    return (
        <Stack>
            <Button
                size="lg"
                variantColor="grey"
                color="Black"
            >
                DONT WALK
            </Button>
        </Stack>
    );
};

WalkControls.propTypes = {};

export default WalkControls;

