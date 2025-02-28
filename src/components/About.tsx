import { Image, Title, Text, Button, MediaQuery, Stack, Group } from '@mantine/core';
import portrait from 'assets/images/portrait.png';

function About() {
  return (
    <Group position='apart'>
      <MediaQuery smallerThan='md' styles={{ maxWidth: '100%', marginRight: 0 }}>
        <Stack align='flex-start' spacing='md' maw={480}>
          <Title order={2}>Hello there! My name is:</Title>

          <MediaQuery smallerThan='xs' styles={{ fontSize: 36 }}>
            <Title order={1} size={60} c='blue'>
              Kanstantsin Yurkevich
            </Title>
          </MediaQuery>

          <Title order={3}>
            I am a Frontend Developer. Most of time I am busy working on my{' '}
            <Text span c='blue' inherit>
              {' '}
              CSS
            </Text>
            ,
            <Text span c='blue' inherit>
              {' '}
              HTML{' '}
            </Text>
            and
            <Text span c='blue' inherit>
              {' '}
              React{' '}
            </Text>
            skills.
          </Title>

          <MediaQuery smallerThan='xs' styles={{ width: '100%' }}>
            <Button size='lg' component='a' href='#projects'>
              Take a look at my projects
            </Button>
          </MediaQuery>
        </Stack>
      </MediaQuery>

      <MediaQuery smallerThan='md' styles={{ display: 'none' }}>
        <Image maw={400} withPlaceholder src={portrait} alt='My portrait' />
      </MediaQuery>
    </Group>
  );
}

export default About;
