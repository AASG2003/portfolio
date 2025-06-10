import {
  AppShell,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
  Box,
  Anchor,
  Flex,
  SimpleGrid,
  ThemeIcon,
} from "@mantine/core"
import {IconDatabase, IconCloudLock, IconCode } from "@tabler/icons-react"

const techLogos = [
  'https://cdn.worldvectorlogo.com/logos/react-2.svg',
  'https://cdn.worldvectorlogo.com/logos/next-js.svg',
  'https://cdn.worldvectorlogo.com/logos/nestjs.svg',
  'https://cdn.worldvectorlogo.com/logos/python-5.svg',
  'https://cdn.worldvectorlogo.com/logos/fastapi-1.svg',
  'https://cdn.worldvectorlogo.com/logos/docker-4.svg',
  'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
  'https://cdn.worldvectorlogo.com/logos/azure-2.svg',
];

const projects = [
  {
    title: 'Academia UNIVALLE BI',
    description: 'System for academic data integration & dashboards',
    icon: IconDatabase,
    color: 'blue',
  },
  {
    title: 'Phishing Lab VM',
    description: 'Ethical hacking lab simulating social engineering',
    icon: IconCloudLock,
    color: 'red',
  },
  {
    title: 'SIG de Cursos',
    description: 'Interactive frontend for course planning and control',
    icon: IconCode,
    color: 'teal',
  },
];

const achievements = [
  {
    title: '2nd Place – SansiCup',
    subtitle: 'Competitive programming contest',
    image: '/public/1703041296026.jpg',
  },
  {
    title: 'Microsoft Certified: AZ-900',
    subtitle: 'Azure Fundamentals Certification',
    image: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
  },
  {
    title: 'Outstanding Participation – ICPC 2023',
    subtitle: 'National competitive programming qualifier',
    image: 'https://blog.ucatec.edu.bo/content/images/size/w2000/2024/06/394065994_315252277876406_3173912388920528136_n.png',
  },
  {
    title: 'Active Member – Python La Paz',
    subtitle: 'Tech community contributor and participant',
    image: '/public/Banner.format-webp-lossless.webp',
  },
  {
    title: 'Event Organizer – PyDay Bolivia',
    subtitle: 'National Python and tech event',
    image: '/public/Screenshot 2025-06-10 004337.png',
  },
  {
    title: 'Bronze Medal – Bolivian Olympiad in Informatics',
    subtitle: 'National-level programming competition',
    image: 'https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2018/10/15/1_pag_6.jpg',
  },
];

function App() {

  return (
    <>
      <AppShell
      header={{ height: 70 }}
      padding={0}
      styles={{
        main: {
          backgroundColor: "#f3f3f3",
        },
      }}
    >
      <AppShell.Header>
        <Container size="xl" h="100%">
          <Group justify="space-between" h="100%">
            <Text fw={500} c="gray.9">
              Andrei.dev
            </Text>
            <Group gap="xl">
              <Anchor href="#" c="gray.9" td="none" fw={400}>
                Abilities
              </Anchor>
              <Anchor href="#" c="gray.9" td="none" fw={400}>
                Proyects
              </Anchor>
              <Anchor href="#" c="gray.9" td="none" fw={400}>
                Achievements and recognitions
              </Anchor>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        {/* Hero Section */}
        <Box bg="white" py={80}>
          <Container size="xl">
            <Grid align="center" gutter="xl">
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <Stack gap="lg">
                  <Text size="sm" c="gray.9">
                    FullStack | Cloud Developer
                  </Text>
                  <Title order={1} size="4rem" fw={700} c="gray.9" lh={1.1}>
                    Software Engineer
                  </Title>
                  <Text size="lg" c="gray.9" maw={600}>
                    I'm Andrei, a software engineer with a frontend core and a full-stack mindset. 
                    I design and build responsive interfaces with React, Vite, and Mantine, and 
                    connect them to robust backends powered by FastAPI, NestJS, and cloud-native 
                    tools. With a background in competitive programming and cybersecurity labs, I 
                    approach every project as a problem to solve — blending clean design, performance, 
                    and real-world impact.
                  </Text>
                  <Button
                    size="lg"
                    bg="#001845"
                    c="white"
                    w="fit-content"
                    styles={{
                      root: {
                        "&:hover": {
                          backgroundColor: "#000000",
                        },
                      },
                    }}
                  >
                    Contact
                  </Button>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <Box pos="relative" h={400}>
                  {/* Geometric shapes */}
                  <Box pos="absolute" top={0} right={0} w={96} h={96} bg="#001233" style={{ borderRadius: "50%" }} />
                  <Box
                    pos="absolute"
                    top={48}
                    right={48}
                    w={64}
                    h={64}
                    bg="#009379"
                    style={{ borderRadius: 8, transform: "rotate(45deg)" }}
                  />
                  <Box pos="absolute" bottom={0} left={0} w={80} h={80} bg="#0466c8" style={{ borderRadius: "50%" }} />
                  {/* Main image */}
                  <Box
                    pos="absolute"
                    top={16}
                    left={16}
                    right={16}
                    bottom={16}
                    bg="gray.2"
                    style={{ borderRadius: 8, overflow: "hidden" }}
                  >
                    <Image
                      src="/public/photo_2025-06-09_23-28-12.jpg"
                      alt="Visual Designer"
                      w="100%"
                      h="100%"
                      fit="cover"
                    />
                  </Box>
                </Box>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>

        {/* Brand Logos */}
        <Box bg="white" py={48} style={{ borderTop: "1px solid #f3f3f3" }}>
          <Title order={2} size="3rem" fw={700} c="gray.9" ta="center" mb="xl">
            Abilities
          </Title>
          <Container size="xl">
            <Flex justify="center" align="center" gap="4rem" opacity={0.6} h={150}>
              {techLogos.map((logo) => (
                <Image
                  key={logo}
                  src={`${logo}`}
                  alt={logo}
                  h={150}
                  style={{ filter: 'grayscale(1)', transition: 'filter 0.3s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0)')}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(1)')}
                />
              ))}
            </Flex>
          </Container>
        </Box>

        {/* Services Section */}
        <Box py={80}>
          <Title order={2} size="3rem" fw={700} c="gray.9" ta="center" mb="xl">
            Proyects
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" px="xl">
            {projects.map((project) => (
              <Card key={project.title} shadow="md" radius="md" p="xl" withBorder>
                <ThemeIcon size="xl" radius="md" variant="light" color={project.color}>
                  <project.icon size={28} />
                </ThemeIcon>
                <Text fw={600} mt="md" size="lg">
                  {project.title}
                </Text>
                <Text mt="xs" c="dimmed" size="sm">
                  {project.description}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        {/* Latest Work */}
        <Box py={80}>
          <Container size="xl">
            <Title order={2} size="3rem" fw={700} c="gray.9" ta="center" mb="xl">
              Achievements and recognitions
            </Title>
            <Grid gutter="lg">
              {achievements.map((item, index) => (
                <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                  <Card bg="white" shadow="sm" radius="md" p={0}>
                    <Box h={300} bg="gray.2">
                      <Image
                        src={item.image}
                        alt={item.title}
                        w="100%"
                        h="100%"
                        fit="cover"
                      />
                    </Box>
                    <Box p="lg">
                      <Text fw={600} c="gray.9" mb="xs">
                        {item.title}
                      </Text>
                      <Text size="sm" c="gray.9">
                        {item.subtitle}
                      </Text>
                    </Box>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Testimonials
        <Box py={80}>
          <Container size="xl">
            <Title order={2} size="3rem" fw={700} c="gray.9" ta="center" mb="xl">
              Testimonial
            </Title>
            <Grid gutter="lg">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Grid.Col key={item} span={{ base: 12, md: 4 }}>
                  <Card bg="white" shadow="sm" radius="md" p="lg">
                    <Stack gap="md">
                      <Text size="sm" c="gray.9">
                        This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
                      </Text>
                      <Rating value={5} readOnly color="#ff6250" />
                      <Group gap="sm">
                        <Avatar src="/placeholder.svg?height=40&width=40" alt="Gemma Nolen" size="md" />
                        <Box>
                          <Text fw={600} size="sm" c="gray.9">
                            Gemma Nolen
                          </Text>
                          <Text size="xs" c="gray.9">
                            Google
                          </Text>
                        </Box>
                      </Group>
                    </Stack>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Container>
        </Box> */}

        {/* Footer */}
        <Box bg="white" py={80}>
          <Container size="xl">
            <Grid gutter="xl">
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <Stack gap="lg">
                  <Title order={2} size="3rem" fw={700} c="gray.9">
                    Let's work together
                  </Title>
                  <Text size="sm" c="gray.9" maw={400}>
                    
                  </Text>
                  <Group gap="md">
                    {[1, 2, 3, 4, 5].map((social) => (
                      <Box key={social} w={32} h={32} bg="gray.9" style={{ borderRadius: 4 }} />
                    ))}
                  </Group>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <Stack gap="md">
                  <TextInput
                    placeholder="Name"
                    size="lg"
                    styles={{
                      input: {
                        backgroundColor: "#f3f3f3",
                        border: "none",
                        color: "#2d2d2d",
                      },
                    }}
                  />
                  <Textarea
                    placeholder="Email"
                    size="lg"
                    minRows={4}
                    styles={{
                      input: {
                        backgroundColor: "#f3f3f3",
                        border: "none",
                        color: "#2d2d2d",
                      },
                    }}
                  />
                  <Button
                    size="lg"
                    bg="gray.9"
                    c="white"
                    fullWidth
                    styles={{
                      root: {
                        "&:hover": {
                          backgroundColor: "#000000",
                        },
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Stack>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>
      </AppShell.Main>
    </AppShell>
    </>
  )
}

export default App
