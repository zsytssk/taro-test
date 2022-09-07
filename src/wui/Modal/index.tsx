import { View } from '@tarojs/components';
import create from 'zustand';

export { Modal, type Props } from './Modal';

type State = {
  modalList: JSX.Element[];
  addModal: (node: JSX.Element) => void;
  removeModal: (node: JSX.Element) => void;
};

export const useModalListStore = create<State>((set) => ({
  modalList: [],
  addModal: (node) =>
    set((state) => ({ modalList: [...state.modalList, node] })),
  removeModal: (node) =>
    set((state) => {
      const modalList = state.modalList.filter((item) => item !== node);
      return { modalList };
    }),
}));

export function ModalManager() {
  const { modalList } = useModalListStore();

  return (
    <View>
      {modalList.map((Item) => {
        return Item;
      })}
    </View>
  );
}
