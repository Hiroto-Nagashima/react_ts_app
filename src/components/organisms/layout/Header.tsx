import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { memo, useCallback, VFC } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import {MenuIconButton} from '../../atoms/button/MenuIconButton'
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useHistory } from "react-router";


export const Header: VFC =memo(()=>{
  const {isOpen, onOpen, onClose} = useDisclosure()
  const history = useHistory()
  // 他のpropsが変更されて、レンダリングされた時、他のアロー関数も再生成されるため、propsの値が変わっていなくても再レンダリングされてしまう
  // 値が変わらないなら関数を再生成しないようにする
  const onClickHome = useCallback(()=> history.push("/home"),[])
  const onClickUserManagement = useCallback(()=> history.push("/home/user_management"),[])
  const onClickSetting = useCallback(()=> history.push("/home/setting"),[])
  return(
    <>
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{base: 3, md:5}}
    >
      <Flex as="a" align="center" mr={8} _hover={{cursor: "pointer"}} onClick={onClickHome}>
        <Heading as="h1" fontSize={{base: "md", md:"lg"}}>
          ユーザー管理アプリ
        </Heading>
      </Flex>
      <Flex align="center" fontSize={{base: "md", md:"lg"}} flexGrow={2} display={{base: "none", md: "flex"}}>
        <Box pr={4}>
          <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
        </Box>
        <Link onClick={onClickSetting}>設定</Link>
      </Flex>
      <MenuIconButton onOpen={onOpen}/>
    </Flex>
    <MenuDrawer
      isOpen={isOpen}
      onClose={onClose}
      onClickUserManagement={onClickUserManagement}
      onClickSetting={onClickSetting}
      onClickHome={onClickHome}
      />
    </>
  )
});