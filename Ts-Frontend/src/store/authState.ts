import { atom } from 'recoil';

interface state {
  token: string | null,
  username: string | null

}

export const authState = atom<state>({
  key: 'authState',
  default: { token: null, username: null },
});