import { List, Tabs, Text, Title, Center, Group, ActionIcon } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconCertificate } from '@tabler/icons-react';
import experienceData from 'assets/data/experienceData.json';

function Experience() {
  const largeScreen = useMediaQuery('(min-width: 60em)');

  return (
    <>
      <Center mb={40}>
        <Title size={40} mx='auto' color='blue'>
          Experience
        </Title>
      </Center>

      <Tabs
        defaultValue={experienceData[0].value}
        orientation={largeScreen ? 'vertical' : 'horizontal'}
        variant='pills'
      >
        <Tabs.List
          mr={largeScreen ? 'xl' : 0}
          mb={largeScreen ? 0 : 'xl'}
          position={largeScreen ? 'left' : 'center'}
        >
          {experienceData.map((item) => (
            <Tabs.Tab key={item.value} value={item.value}>
              {item.name}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {experienceData.map((item) => (
          <Tabs.Panel key={item.value} value={item.value}>
            <Group>
              <Text c='inherit' size={30} weight='bold'>
                {item.name}
              </Text>
              <ActionIcon component='a' href={item.link} target='_blank' size='lg' color='blue'>
                <IconCertificate size='1.05rem' stroke={1.5} />
              </ActionIcon>
            </Group>
            <Text fs='xs' color='dimmed'>
              {item.startDate} - {item.endDate}
            </Text>
            <List mt='xl'>
              {item.skills.map((skill) => (
                <List.Item key={skill}>{skill}</List.Item>
              ))}
            </List>
          </Tabs.Panel>
        ))}
      </Tabs>
    </>
  );
}

export default Experience;
