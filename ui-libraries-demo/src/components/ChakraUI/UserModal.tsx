import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  useColorMode,
} from '@chakra-ui/react';

interface UserFormData {
  name: string;
  email: string;
  role: string;
  department: string;
}

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: UserFormData) => void;
}

export const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const { colorMode } = useColorMode();
  const [formData, setFormData] = React.useState<UserFormData>({
    name: '',
    email: '',
    role: '',
    department: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
    setFormData({ name: '', email: '', role: '', department: '' });
  };

  const handleChange = (field: keyof UserFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent bg={colorMode === 'dark' ? 'gray.700' : 'white'}>
        <ModalHeader>Добавить пользователя</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Имя</FormLabel>
                <Input
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Введите имя"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="Введите email"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Роль</FormLabel>
                <Select
                  value={formData.role}
                  onChange={(e) => handleChange('role', e.target.value)}
                  placeholder="Выберите роль"
                >
                  <option value="admin">Администратор</option>
                  <option value="user">Пользователь</option>
                  <option value="manager">Менеджер</option>
                  <option value="editor">Редактор</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Отдел</FormLabel>
                <Input
                  value={formData.department}
                  onChange={(e) => handleChange('department', e.target.value)}
                  placeholder="Введите отдел"
                />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Отмена
            </Button>
            <Button colorScheme="blue" type="submit">
              Добавить
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};