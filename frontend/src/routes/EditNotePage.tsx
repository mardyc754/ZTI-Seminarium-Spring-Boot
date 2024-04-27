import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, type MouseEvent } from 'react';
import { NoteData } from '../types';

function EditNotePage() {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    fetch(`http://localhost:8080/note/${noteId}`)
      .then((response) => response.json())
      .then((data) => {
        const newNote = data.note as NoteData;

        setData({
          title: newNote.title,
          content: newNote.content
        });

        console.log(newNote);
      });
  }, [noteId]);

  const handleSubmit = (event: MouseEvent) => {
    event.preventDefault();

    const requestData = {
      id: noteId,
      ...data
    };
    console.log(requestData);

    fetch(`http://localhost:8080/note/update`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate('/');
      });
  };

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent={'space-between'}>
        <Heading as="h2">Edit note</Heading>
      </Box>
      <Stack as="form" gap="4">
        <Stack>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            placeholder="Enter note title"
            name="title"
            bg="white"
            value={data.title}
            onChange={(event) =>
              setData((prev) => ({
                ...prev,
                title: event.target.value
              }))
            }
          />
        </Stack>
        <Stack>
          <FormLabel htmlFor="content">Content</FormLabel>
          <Textarea
            value={data.content}
            placeholder="Enter note content"
            bg="white"
            name="content"
            onChange={(event) =>
              setData((prev) => ({
                ...prev,
                content: event.target.value
              }))
            }
          />
        </Stack>
        <Button
          colorScheme="teal"
          alignSelf="flex-end"
          type="submit"
          onClick={handleSubmit}
        >
          Save
        </Button>
      </Stack>
    </>
  );
}

export default EditNotePage;
