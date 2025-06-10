// src/components/Navbar.tsx
import { Anchor, Box, Flex, Text } from '@mantine/core';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  return (
    <Box
      component="header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: '#fff',
        borderBottom: '1px solid #e0e0e0',
        zIndex: 999,
      }}
      px="md"
    >
      <Flex
        justify="space-between"
        align="center"
        h="100%"
        maw={1200}
        mx="auto"
      >
        {/* Logo */}
        <Text size="xl" fw={700}>
          Andrei.dev
        </Text>

        {/* Enlaces */}
        <Flex gap="lg">
          {links.map((link) => (
            <Anchor
              key={link.href}
              href={link.href}
              size="sm"
              c="gray.8"
            >
              {link.label}
            </Anchor>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
