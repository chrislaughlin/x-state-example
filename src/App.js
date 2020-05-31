import React from 'react';
import {
    Stack,
    Heading
} from "@chakra-ui/core";

import Lights from "./Lights";
import WalkControls from "./WalkControls";

function App() {
    return (
        <Stack
            justifyContent="center"
            width="100%"
            alignItems="center"
            spacing="50px"
        >
            <Heading
                fontSize="l"
                color="#D9D4A8"
            >
                Traffic Lights
            </Heading>

            <Lights/>

            <Heading
                fontSize="l"
                color="#D9D4A8"
            >
                Controls
            </Heading>

            <WalkControls/>
        </Stack>
    );
}

export default App;
