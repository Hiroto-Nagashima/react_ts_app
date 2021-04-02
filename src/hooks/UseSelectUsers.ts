import { useCallback, useState } from "react"
import { User } from "../types/api/user"
type Props={
  id:number;
  users:Array<User>
}

export const useSelectUser =()=>{
  const [selectedUsers, setSelectedUsers] = useState<User | null >(null)
  const onSelectUser=useCallback((props: Props)=>{
    const { id, users } = props;
    // 配列の中から条件に一致した最初の要素を返す
    const targetUser = users.find((user)=> user.id === id)
    // ! undefinedは存在しないと明示する
    // targetUser && nullでも可能
    setSelectedUsers(targetUser!)
  },[])
  return { onSelectUser, selectedUsers }
}