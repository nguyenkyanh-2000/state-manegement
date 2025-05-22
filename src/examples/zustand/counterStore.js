import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  name: "John",
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  updateName: () =>
    set((state) => ({
      name: state.name === "John" ? "Jane" : "John",
    })),
}));

export default useCounterStore;
