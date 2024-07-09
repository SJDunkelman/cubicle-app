import { create } from 'zustand'

const appStore = create((set) => ({
    // Current page
    currentPage: 'dashboard',
    setCurrentPage: (page) => set({ currentPage: page }),

    // Selected character
    selectedCharacter: 'aria-bladesweep',
    setSelectedCharacter: (character) => set({ selectedCharacter: character }),

    // Selected quest
    selectedQuest: null,
    setSelectedQuest: (quest) => set({ selectedQuest: quest }),

    // Settings
    questNotifications: true,
    setQuestNotifications: (enabled) => set({ questNotifications: enabled }),

    chatNotifications: true,
    setChatNotifications: (enabled) => set({ chatNotifications: enabled }),

    chatFrequency: 'normal',
    setChatFrequency: (frequency) => set({ chatFrequency: frequency }),
}))

export default appStore