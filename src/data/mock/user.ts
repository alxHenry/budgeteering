import { User } from '../types';

export const getMockUser = (id?: string, name?: string): User => ({
  id: id || 'abc-123',
  name: name || 'Mock User',
});
