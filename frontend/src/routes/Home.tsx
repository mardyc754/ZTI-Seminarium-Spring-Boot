import { Note, NoteProps } from '../components/Note';
import { Box, Button, Heading, Stack, Link } from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';


function Home() {
    const [notes, setNotes] = useState<NoteProps[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/note/list')
            .then((response) => response.json())
            .then((data) => {
                const newNotes : NoteProps[] = data.notes.map((note: any) => {
                    return {
                        noteId: note.id,
                        title: note.title,
                        content: note.content,
                        lastModified: new Date(note.lastModified)
                    };
                });
                console.log(newNotes);
                setNotes(newNotes);
            });
    }, []);

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent={'space-between'}>
        <Heading as="h2">Notes</Heading>
        <Button colorScheme="teal">
          <Link href="/create">+ Add Note</Link>
        </Button>
      </Box>
      <Stack gap="4">
        {notes.map((note, index) => (
          <Note
            key={`note-${index}`}
            noteId={note.noteId}
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
