import { create } from 'zustand'

export const useStore = create((set) => ({
    
    data: [],
    
    origem: [
        -8.095500365761255, -34.911881534373244
    ],
    destino: [],

    isCardSelected: false,
    isMarkerSelected: false,

    fetch: async () => {
        const response = await fetch("https://api-clinics.rj.r.appspot.com/all")
        set({ data: await response.json()})
    },
    
    armazenaOrigem: (payload1, payload2) => set({origem: [payload1, payload2]}),    
    armazenaDestino: (payload1, payload2) => set({destino: [payload1, payload2]}),

    selectCard: () => set((state) => ({ isMarkerSelected: !state.isMarkerSelected })),
    selectMarker: () => set((state) => ({ isCardSelected: !state.isCardSelected })),
    setMarkerId: (payload) => set((state) => ({ idMarcador: state.idMarcador + payload }))
}))
