import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import {mode, StyleFunctionProps} from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

const styles = {
  global: (props: Dict<any> | StyleFunctionProps) => ({
    body: {
      bg: mode('#bbb', '#555')(props)
    }
  }),
}

const config:ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}



export const theme = extendTheme({ styles})