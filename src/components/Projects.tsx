import {
  ActionIcon,
  Badge,
  Card,
  Group,
  SimpleGrid,
  Image,
  Text,
  Center,
  Title,
} from '@mantine/core';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import projectsData from 'assets/data/projectsData.json';

function Projects() {
  return (
    <>
      <Center mb={40}>
        <Title size={40} mx='auto' color='blue'>
          Projects
        </Title>
      </Center>

      <SimpleGrid
        cols={3}
        spacing='xl'
        breakpoints={[
          { maxWidth: 'md', cols: 3, spacing: 'md' },
          { maxWidth: 'sm', cols: 2, spacing: 'sm' },
          { maxWidth: 'xs', cols: 1, spacing: 'xs' },
        ]}
      >
        {projectsData.map((project) => (
          <Card
            key={project.title}
            withBorder
            radius='md'
            padding='md'
            display='flex'
            sx={{ flexDirection: 'column' }}
          >
            <Card.Section>
              <Image src={project.screenshot} alt={project.title} height={180} />
            </Card.Section>

            <Group position='apart' mt='md'>
              <Text fz='lg' fw={500}>
                {project.title}
              </Text>
              <Group spacing={6}>
                <ActionIcon
                  component='a'
                  href={project.github}
                  target='_blank'
                  size='lg'
                  color='blue'
                >
                  <IconBrandGithub size='1.05rem' stroke={1.5} />
                </ActionIcon>
                <ActionIcon
                  component='a'
                  href={project.deploy}
                  target='_blank'
                  size='lg'
                  color='blue'
                >
                  <IconExternalLink size='1.05rem' stroke={1.5} />
                </ActionIcon>
              </Group>
            </Group>

            <Text fz='sm' mt={6} mb='md'>
              {project.description}
            </Text>

            <Group spacing={6} mt='auto'>
              {project.skills.map((skill) => (
                <Badge variant='outline' key={skill}>
                  {skill}
                </Badge>
              ))}
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}

export default Projects;
