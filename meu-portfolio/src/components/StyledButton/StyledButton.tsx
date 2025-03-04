import { styled } from "@mui/material"
import { ReactNode } from "react"


interface StyledButtonProps{
    children: ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({children}) => {

    const StyledButton = styled("button") (() => ({
        backgroundColor: "green",
        border: "1px solid",
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px"
    
    }))

    return (
      <>
        <StyledButton>
            {children}
        </StyledButton>
      </>
    )
  }
  
  export default StyledButton
  