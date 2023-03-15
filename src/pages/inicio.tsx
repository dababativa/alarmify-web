import Image from "next/image";
import { Button, Typography, Box, Grid } from "@mui/material";
import { ActionAreaCard, AlarmCard, CustomInput } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <Box sx={{ marginLeft: "50px", marginTop: "50px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid
            item
            xs={10}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                marginBottom: "50px",
                color: "#003D5B",
              }}
            >
              Alarmify
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Link href="/">
              <Image alt="logo" src="/exit.png" width={58} height={58} />
            </Link>
          </Grid>
        </Grid>
        <Image alt="logo" src="/alarm-dark.png" width={100} height={100} />
      </Box>

      <Typography variant="h4" component="h2" sx={{ color: "#003D5B" }}>
        Galería de imágenes
      </Typography>
      <Link href="tetera">
        <ActionAreaCard title="Tetera" imageRoute="/tetera.jpg" />
      </Link>
      <Link href="vaso">
        <ActionAreaCard title="Vaso" imageRoute="/vaso.png" />
      </Link>
      <Link href="cuchara">
        <ActionAreaCard title="Cuchara" imageRoute="/cuchara.jpg" />
      </Link>
      <Typography variant="h4" component="h2" sx={{ color: "#003D5B" }}>
        Alarmas
      </Typography>
      <Link
        href="/alarma"
        style={{
          textDecoration: "none",
          color: "black",
          backgroundColor: "hotpink",
        }}
      >
        <AlarmCard name="Despertador" />
      </Link>
    </Box>
  );
}
