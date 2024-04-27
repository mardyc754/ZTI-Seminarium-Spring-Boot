import React from 'react';
import { Box, Heading, Stack, Link } from '@chakra-ui/react';

type PageWrapperProps = {
  children?: React.ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Box display="flex" flexDirection={'column'}>
      <Box
        bgColor="teal"
        as="header"
        w="100%"
        p={4}
        color="white"
        minHeight="15vh"
        display="flex"
        alignItems="center"
      >
        <Heading as="h1">
          <Link
            href="/"
            _hover={{
              textDecoration: 'none'
            }}
          >
            Note App
          </Link>
        </Heading>
      </Box>
      <Stack
        as="main"
        flex="1"
        minHeight="85vh"
        backgroundColor="#eee"
        padding={8}
        gap="6"
      >
        {children}
      </Stack>
    </Box>
  );
};

export default PageWrapper;
