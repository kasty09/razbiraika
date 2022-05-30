export const header = {
  namespaced: true,
  state: () => ({
    expanded: false
  }),
  mutations: {
    setExpanded: (state: any, expanded: boolean) => {
      state.expanded = expanded
    }
  }
}
