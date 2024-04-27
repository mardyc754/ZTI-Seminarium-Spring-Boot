import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Divider,
  Text,
  Button,
  ButtonGroup,
  Link
} from '@chakra-ui/react';

type NoteProps = {
  noteId: number;
  title: string;
  content: string;
  lastModified: Date;
};

const Note = ({ noteId, title, content, lastModified }: NoteProps) => {
  const handleDelete = () => {
    fetch(`http://localhost:8080/note/delete/${noteId}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  return (
    <Card>
      <Box display="flex" justifyContent="space-between" alignItems={'center'}>
        <CardHeader
          display="flex"
          alignItems={'center'}
          width="100%"
          justifyContent="space-between"
        >
          <Text>{title}</Text>
          <Box display="flex" alignItems="center" gap="6">
            <Text>{lastModified.toLocaleString()}</Text>
            <ButtonGroup>
              <Button size="sm" colorScheme="teal">
                <Link
                  href={`/${noteId}/edit`}
                  _hover={{
                    textDecoration: 'none'
                  }}
                >
                  Edit
                </Link>
              </Button>
              <Button colorScheme="red" size="sm" onClick={handleDelete}>
                Delete
              </Button>
            </ButtonGroup>
          </Box>
        </CardHeader>
      </Box>
      <Divider />
      <CardBody>{content}</CardBody>
    </Card>
  );
};

export type { NoteProps };
export { Note };
