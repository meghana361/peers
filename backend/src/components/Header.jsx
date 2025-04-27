import { Box, Button, Flex, Heading, Link, useColorMode } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import useLogout from "../hooks/useLogout";
// import authScreenAtom from "../atoms/authAtom";
import { BsFillChatQuoteFill } from "react-icons/bs";


const Header = () => {
	const {  toggleColorMode } = useColorMode();
	const user = useRecoilValue(userAtom);
	const logout = useLogout();
	// const setAuthScreen = useSetRecoilState(authScreenAtom);

	return (
        <>
        <Flex justifyContent="center" fontFamily="cursive" fontSize={{base:"xl",md:"2xl",lg:"2xl"}} fontWeight="extrabold" fontStyle={"italic"} mt={12} onClick={toggleColorMode} cursor={"pointer"}   textDecoration="underline" >
        PeerLink
      </Flex> 
		<Flex justifyContent={"space-between"} mt={6} mb='12'>
			{user && (
                <Link as={RouterLink} to='/'>
							<Box fontSize={{ base: "24px", md: "30px", lg: "40px" }}>
  
						
					<AiFillHome />
      </Box>
				</Link>
			)}
			{!user && (
			 <Heading fontSize="xl" color="gray.600" mt={3} textAlign="center" ml={24}>
					Find your community and stay connected.
				</Heading>
			)}
 
		

			{user && (
                <Flex alignItems={"center"} gap={4}>
					<Link as={RouterLink} to={`/${user.username}`}>
					<Box fontSize={{ base: "24px", md: "30px", lg: "40px" }}>
        <RxAvatar />
						
      </Box>

					</Link>
					<Link as={RouterLink} to={`/chat`}>
						<BsFillChatQuoteFill size={20} />
					</Link>
					
					<Button 
    onClick={logout}
    padding={{ base: "6px", md: "8px", lg: "10px" }}
    height="auto"
  >
    <Box fontSize={{ base: "24px", md: "30px", lg: "30px" }}>
      <FiLogOut />
    </Box>
  </Button>
				</Flex>
			)}

			{/* {!user && (
                <Link as={RouterLink} to={"/auth"} onClick={() => setAuthScreen("signup")} fontWeight={'extrabold'}>
					Sign up
				</Link>
			)} */}
		</Flex>
            </>
	);
};

export default Header;