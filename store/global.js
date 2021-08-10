import { make } from "vuex-pathify";

export const state = () => ({
  isEnabled: true,
  myObject: {
    element1: 42
  }
});

export const mutations = {
  ...make.mutations(state),
};

export const getters = {
  ...make.getters(state),
};
