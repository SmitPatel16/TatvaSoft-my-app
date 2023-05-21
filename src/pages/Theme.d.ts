import { ThemeOptions } from "@mui/material";
import { PaletteOptions } from "@mui/material";

declare module '@mui/material/styles'{
    interface PaletteOptions{
        palette: {
            secondary : {
                main : React.CSSProperties['color']
            }
        }
    }
}