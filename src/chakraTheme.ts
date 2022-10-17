import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { StepsStyleConfig as Steps } from 'chakra-ui-steps'

const utmfTheme = {
	components: {
		Steps,
	}
}

const theme = extendTheme({ utmfTheme })

export default theme

