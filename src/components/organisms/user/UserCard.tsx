import { memo, ReactNode, VFC } from "react";
import { Image } from "@chakra-ui/image";
import { Box, Stack, Text} from "@chakra-ui/layout";
type Props={
  id: number
  imageURL: string;
  userName: string;
  fullName: string;
  onClick:(id:number)=>void
}

export const UserCard: VFC<Props> =memo((props)=>{
  const { id, imageURL,userName,fullName,onClick} = props
  return(
    <Box
      w="260px"
      h="260px"
      borderRadius="10px"
      bg="white" shadow="md"
      p={4}
      _hover={{cursor: "pointer", opacity: 0.8}}
      onClick={()=>onClick(id)}
      >
      <Stack textAlign="center">
        <Image
          alt={userName}
          m="auto"
          borderRadius="full"
          boxSize="160px"
          src={imageURL}
          />
          <Text fontSize="lg" fontWeight="bold">{userName}</Text>
          <Text fontSize="sm" color="grey">{fullName}</Text>
      </Stack>
    </Box>
  )
});