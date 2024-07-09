import { create } from 'zustand'

const appStore = create((set) => ({
    // Current page
    currentPage: 'dashboard',
    setCurrentPage: (page) => set({ currentPage: page }),

    // Selected character
    selectedCharacter: 'aria-bladesweep',
    setSelectedCharacter: (character) => set({ selectedCharacter: character }),
}))

export default appStore