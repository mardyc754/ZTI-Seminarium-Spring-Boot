import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea
} from '@chakra-ui/react';
import { useState } from 'react';

function EditNotePage() {
    const noteId = window.location.pathname.split('/')[1];
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const requestData = {
            id: noteId,
            title: title,
            content: content
        };
        console.log(requestData);

        fetch(`http://localhost:8080/note/update`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      }

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent={'space-between'}>
        <Heading as="h2">Edit note</Heading>
      </Box>
      <Stack as="form" gap="4">
        <Stack>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input placeholder="Enter note title" name="title" bg="white" onChange={(event) => setTitle(event.target.value)} />
        </Stack>
        <Stack>
          <FormLabel htmlFor="content">Content</FormLabel>
          <Textarea
            placeholder="Enter note content"
            bg="white"
            name="content"
            onChange={(event) => setContent(event.target.value)}
          />
        </Stack>
        <Button colorScheme="teal" alignSelf="flex-end" type="submit" onClick={handleSubmit}>
          Save
        </Button>
      </Stack>
    </>
  );
}

export default EditNotePage;
