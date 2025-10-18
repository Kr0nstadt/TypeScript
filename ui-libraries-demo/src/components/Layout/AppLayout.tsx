import React from 'react'
import { Box, Flex, Heading, Container } from '@chakra-ui/react'
import { ThemeToggle } from './ThemeToggle'

interface AppLayoutProps {
  children: React.ReactNode
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Box minH="100vh">
      <Flex
        as="header"
        bg="brand.500"
        color="white"
        px={4}
        py={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading size="lg">Дашборд</Heading>
        <ThemeToggle />
      </Flex>
      <Container maxW="container.xl" py={6}>
        {children}
      </Container>
    </Box>
  )
}