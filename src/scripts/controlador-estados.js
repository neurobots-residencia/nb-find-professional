import { create } from 'zustand'

export const useStore = create((set) => ({

    name: "",
    email: "",
    whatsapp: "",
    state: "",
    city: "",
    hasAvc: "",
    hasAnotherCondition: "",
    investmentAmount: "",

    armazenaInvestmentAmount: (payload) => set({investmentAmount: payload}),
    armazenaHasAnotherCondition: (payload) => set({hasAnotherCondition: payload}),
    armazenaHasAvc: (payload) => set({hasAvc: payload}),
    armazenaCity: (payload) => set({city: payload}),
    armazenaState: (payload) => set({state: payload}),
    armazenaWhatsapp: (payload) => set({whatsapp: payload}),
    armazenaEmail: (payload) => set({email: payload}),
    armazenaName: (payload) => set({name: payload}),

    data: [],
    
    origem: [
        -8.095500365761255, -34.911881534373244
    ],
    destino: [],


    fetch: async () => {
        const response = await fetch("https://api-clinics.rj.r.appspot.com/all")
        set({data: await response.json()})
    },
    
    armazenaOrigem: (payload1, payload2) => set({origem: [payload1, payload2]}),    
    armazenaDestino: (payload1, payload2) => set({destino: [payload1, payload2]}),
}))
