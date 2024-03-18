import { create } from 'zustand'

export const useDarkMode = create((set) => ({
  activeDarkMode: false,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  changeDarkMode: () => set((state) => ({activeDarkMode: !state.activeDarkMode}))
}))

