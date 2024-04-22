import React from 'react';
import { Box } from '@chakra-ui/react';

type PageWrapperProps = {
  title: string;
  children?: React.ReactNode;
};

const PageWrapper = ({ title, children }: PageWrapperProps) => {
  return (
    <Box w="100%" h="100%">
      <Box
        as="header"
        backgroundColor={'blue.500'}
        w="100%"
        p={4}
        color="white"
      >
        NoteApp
      </Box>
      <header />
      <main>
        <h1>{title}</h1>
        {children}
      </main>
      <footer />
    </Box>
  );
};

export default PageWrapper;
