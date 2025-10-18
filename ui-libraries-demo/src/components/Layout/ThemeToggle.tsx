import React from 'react'
import { IconButton, useColorMode, Tooltip } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const ThemeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Tooltip label={colorMode === 'light' ? 'Темная тема' : 'Светлая тема'}>
      <IconButton
        aria-label="Toggle theme"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Tooltip>
  )
}