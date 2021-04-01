import { memo, VFC } from "react";
import { HamburgerIcon} from '@chakra-ui/icons'
import { IconButton } from "@chakra-ui/button";
type Props={
  // 引数がない、返却値なし
  onOpen:()=>void
}
export const MenuIconButton: VFC<Props> =memo((props)=>{
  const {onOpen} =props
  return(
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon/>}
      size="sm"
      display={{base: "none", md: "block"}}
      onClick={ onOpen }
    />
  )
});