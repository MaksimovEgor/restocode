import { defineStore } from 'pinia';

export enum SidebarView {
  CONTACTS = 'CONTACTS',
  NEW_CHAT = 'NEW_CHAT',
  NEW_LOGO = 'NEW_LOGO',
  CAFE = 'CAFE',
}

interface State {
  sidebarView: SidebarView;
}

export const useGlobalStore = defineStore('global', {
  state: () => {
    return {
      sidebarView: SidebarView.CONTACTS,
    } as State;
  },
  actions: {
    showSidebarView(view: SidebarView) {
      this.sidebarView = view;
    },
  },
});
