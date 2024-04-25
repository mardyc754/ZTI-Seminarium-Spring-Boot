import { Note } from '../components';
import { Box, Button, Heading, Stack, Link } from '@chakra-ui/react';

const notes = [
  {
    id: 1,
    title: 'First note',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsum ad possimus voluptatibus tempora quis minima repudiandae sapiente aspernatur cupiditate repellat id hic, perferendis asperiores ratione alias cum eaque. Libero!',
    lastModified: new Date()
  },
  {
    id: 2,
    title: 'Second note',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate pariatur obcaecati laborum repudiandae, sequi reiciendis exercitationem impedit enim non totam blanditiis quibusdam veniam laudantium fugiat deleniti molestiae quis. Fuga, dolorem.',
    lastModified: new Date()
  },
  {
    id: 3,
    title: 'Third note',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    lastModified: new Date()
  }
];
function Home() {
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
