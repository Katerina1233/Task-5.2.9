import { Container, Flex, Stack, Title, Text, Button, Image, Paper } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import Cat from "../../assets/sad-cat-1.svg";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container size="sm" py="xl">
      <Paper
        radius="md"
        shadow="sm"
        p="xl"
        style={{
          backgroundColor: '#fff',
          borderRadius: 12,
        }}
      >
        <Flex justify="space-between" align="center" mb="md">
          <Stack gap={4}>
            <Title order={2} fw={700}>
              Упс! Такой страницы не существует
            </Title>
            <Text size="sm" c="dimmed">
              Давайте перейдём к началу.
            </Text>
          </Stack>

          <Button
            color="blue"
            radius="md"
            onClick={() => navigate('/vacancies/moscow')}
          >
            На главную
          </Button>
        </Flex>

        <Image
          src={Cat}
          alt="Грустный котик"
          radius="md"
          fit="cover"
          w="100%"
        />
      </Paper>
    </Container>
  );
};
