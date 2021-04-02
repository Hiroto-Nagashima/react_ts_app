import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { ChangeEvent, memo, useState, VFC } from "react";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC =memo(()=>{
  const [userId, setUserId] = useState('')
  const {login, loading} = useAuth()
  const onClickLogin =()=> login(userId)
  const onChangeUserId =(e: ChangeEvent<HTMLInputElement>)=> setUserId(e.target.value)
  return(
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
        <Divider my={4}/>
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="userId" value={userId} onChange={onChangeUserId}/>
          <PrimaryButton onClick={onClickLogin} disabled={userId === ""} loading ={loading}>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
});