// グローバルなスタイルの定義
import {extendTheme} from '@chakra-ui/react'
const theme = extendTheme({
  styles:{
    global:{
      body:{
        backgroundColor: "grey.100",
        color: "grey.800"
      }
    }
  }
})
export default theme;