import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { UserInterface } from '../types/user'
import { getUser } from '../models/user'

interface UserContextType {
  user: UserInterface | null
  setUser: React.Dispatch<React.SetStateAction<UserInterface | null>>
}

const defaultUserContext: UserContextType = {
  user: null,
  setUser: () => {},
}

export const UserContext = createContext<UserContextType>(defaultUserContext)

interface AppContextProps {
  children: ReactNode
}

const AppContext: React.FC<AppContextProps> = ({ children }) => {
  const [user, setUser] = useState<UserInterface | null>(null)

  const fetchUser = async () => {
    try {
      const userData: UserInterface | null = await getUser('1')
      setUser(userData)
    } catch (error) {
      console.error('Erro ao carregar o usuário:', error)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default AppContext
