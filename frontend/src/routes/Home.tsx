import { Box, Button, Heading, Stack, Link } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Note } from '../components/Note';
import { type NoteData } from '../types';

function Home() {
  const [notes, setNotes] = useState<NoteData[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/note/list')
      .then((response) => response.json())
      .then((data) => {
        const newNotes = data.notes.map((note: NoteData) => {
          return {
            id: note.id,
            title: note.title,
            content: note.content,
            lastModified: new Date(note.lastModified)
          };
        }) as NoteData[];
        newNotes.sort(
          (a, b) => b.lastModified.getTime() - a.lastModified.getTime()
        );
        console.log(newNotes);
        setNotes(newNotes);
      });
  }, []);

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent={'space-between'}>
        <Heading as="h2">Notes</Heading>
        <Button colorScheme="teal">
          <Link
            href="/create"
            _hover={{
              textDecoration: 'none'
            }}
          >
            + Add Note
          </Link>
        </Button>
      </Box>
      <Stack gap="4">
        {notes.map((note, index) => (
          <Note
            key={`note-${index}`}
            noteId={note.id}
            title={note.title}
            content={note.content}
            lastModified={note.lastModified}
          />
        ))}
      </Stack>
    </>
  );
}

export default Home;
