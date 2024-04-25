import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea
} from '@chakra-ui/react';

function EditNotePage() {
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent={'space-between'}>
        <Heading as="h2">Edit note</Heading>
      </Box>
      <Stack as="form" gap="4">
        <Stack>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input placeholder="Enter note title" name="title" bg="white" />
        </Stack>
        <Stack>
          <FormLabel htmlFor="content">Content</FormLabel>
          <Textarea
            placeholder="Enter note content"
            bg="white"
            name="content"
          />
        </Stack>
        <Button colorScheme="teal" alignSelf="flex-end" type="submit">
          Save
        </Button>
      </Stack>
    </>
  );
}

export default EditNotePage;
