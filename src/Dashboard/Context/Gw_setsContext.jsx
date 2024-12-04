import { createContext, useContext } from 'react'


export const GatewaySetsContext = createContext()

export const useGatewaySets = () => useContext(GatewaySetsContext)