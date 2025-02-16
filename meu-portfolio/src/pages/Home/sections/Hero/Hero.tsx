import {  Container, Grid, Typography, styled } from "@mui/material"
import Perfil from "../../../../assets/images/Perfil.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import StyledButton from "../../../../components/StyledButton/StyledButton";


const Hero = () => {

    const StyledHero = styled("div") (() => ({
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center"


    }))
    const StyledImg = styled("img") (() => ({
        width: "90%",
        borderRadius: "60%"
    }))

    return (
       <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid xs={12} md = {4}>
                        <StyledImg src={Perfil} />
                    </Grid>
                    <Grid xs={12} md = {8}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Marcelo Ascencio</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center" >Desenvolvedor de Software</Typography>
                        <Grid container display="flex" justifyContent="center" pt={4} >
                            <Grid xs ={12} md={4} display="flex" justifyContent="center">
                            
                            <StyledButton>
                                <DownloadIcon/>
                                    <Typography>Download CV</Typography>
                            </StyledButton>
                            </Grid >

                            <Grid xs ={12} md={4} display="flex" justifyContent="center">
                            <StyledButton>
                                <AlternateEmailIcon/>
                                <Typography>Entre em contato comigo!</Typography>
                             </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>
            </Container>
            
            Ola Mundo
            
       </StyledHero>     
        
    )
}  
  
export default Hero