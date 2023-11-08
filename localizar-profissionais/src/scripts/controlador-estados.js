import { create } from 'zustand'

export const useStore = create((set) => ({
    isCardSelected: false,
    isMarkerSelected: false,
    idMarcador: null,
    selectCard: () => set((state) => ({ isMarkerSelected: !state.isMarkerSelected })),
    selectMarker: () => set((state) => ({ isCardSelected: !state.isCardSelected })),
    setMarkerId: (payload) => set((state) => ({ idMarcador: state.idMarcador + payload }))
}))

    