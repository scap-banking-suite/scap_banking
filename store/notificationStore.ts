import { create } from "zustand";

interface NotifcationState {
  notificationVisible: boolean;
  sideBarVisible: boolean;
  toggleNotification: () => void;
  setNotification: (visible: boolean) => void;
  setSideBarVisible: (visible: boolean) => void;
}

const notificationStore = create<NotifcationState>((set) => ({
  notificationVisible: false,
  sideBarVisible: false,
  toggleNotification: () =>
    set((state) => ({ notificationVisible: !state.notificationVisible })),
  setNotification: (visible: boolean) => set({ notificationVisible: visible }),
  setSideBarVisible: (visible: boolean) => set({ sideBarVisible: visible }),
}));

export default notificationStore;
