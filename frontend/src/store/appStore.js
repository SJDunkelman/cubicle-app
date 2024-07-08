import { create } from 'zustand'

const appStore = create((set) => ({
    // Current page
    currentPage: 'overview',
    setCurrentPage: (page) => set({ currentPage: page }),

    // Selected character
    selectedCharacter: 'aria-bladesweep',
    setSelectedCharacter: (character) => set({ selectedCharacter: character }),
}))

export default appStore