import { create } from 'zustand'

export const useStore = create((set) => ({
    
    data: [],
    isCardSelected: false,
    isMarkerSelected: false,
    idMarcador: null,

    fetch: async () => {
        const response = await fetch("https://api-clinics.rj.r.appspot.com/all")
        set({ data: await response.json()})
    },

    selectCard: () => set((state) => ({ isMarkerSelected: !state.isMarkerSelected })),
    selectMarker: () => set((state) => ({ isCardSelected: !state.isCardSelected })),
    setMarkerId: (payload) => set((state) => ({ idMarcador: state.idMarcador + payload }))
}))
