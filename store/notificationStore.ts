import { create } from "zustand";

interface NotifcationState {
  notificationVisible: boolean;
  toggleNotification: () => void;
  setNotification: (visible: boolean) => void;
}

const notificationStore = create<NotifcationState>((set) => ({
  notificationVisible: false,
  toggleNotification: () =>
    set((state) => ({ notificationVisible: !state.notificationVisible })),
  setNotification: (visible: boolean) => set({ notificationVisible: visible }),
}));

export default notificationStore;
