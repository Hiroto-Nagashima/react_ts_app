import { Center, Wrap, WrapItem } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { memo, useCallback, useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "../organisms/user/UserCard";
import { useDisclosure } from "@chakra-ui/hooks";
import { UserDetailModal } from "../organisms/user/UserDetailModal"
import { useSelectUser } from "../../hooks/UseSelectUsers";

export const UserManagement: VFC =memo(()=>{
  const {loading, users, getUsers} = useAllUsers()
  useEffect(()=>getUsers(),[])
  const { isOpen, onOpen, onClose}= useDisclosure()
  const {onSelectUser,selectedUsers} = useSelectUser()
  // propsに関数を渡すときはuseCallback
  //使う変数は全て依存配列に指定しておくと良い
  const onClickUser=useCallback((id:number)=>{
    onSelectUser({id, users})
    onOpen()

  },[users, onSelectUser])
  return(
    <>
    {loading? (
      <Center h="100vh">
        <Spinner/>
      </Center>
    ):(
      <Wrap p={{base: 4, md: 10}} >
        {users?.map((user)=>(
            <WrapItem key={user.id} mx="auto">
              <UserCard
              id={user.id}
              imageURL="https://source.unsplash.com/random"
              userName={user.username}
              fullName={user.name}
              onClick={onClickUser}
              />
            </WrapItem>
          ))}
      </Wrap>
        )}
    <UserDetailModal user={selectedUsers} isOpen={isOpen} onClose={onClose}/>
    </>
  )
});