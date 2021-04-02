import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { User } from "../types/api/user";
type LoginUserContextType={
  loginUser: User | null
  // hooksの型指定<stateの型>
  setLoginUser: Dispatch<SetStateAction<User | null>>
}
// createContext(初期値)
const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType)

export const LoginUserProvider =(props:{children: ReactNode})=>{
  const{ children } =props
  const [ loginUser, setLoginUser ] = useState<User | null>(null)
  return(
    // loginUser, setLoginUserのどちらかが変更されたら、それらが使用されている全てのページで再レンダリングが起きる。
    // それが嫌ならcontextを分けるというテクニックもある
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}