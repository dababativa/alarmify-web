import Image from "next/image";
import { Button, Typography, Box } from "@mui/material";
import { ActionAreaCard, AlarmCard, CustomInput } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <Box sx={{ marginLeft: "50px" }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{ marginBottom: "30px", color: "#003D5B" }}
      >
        Alarmify
      </Typography>
      <Typography
        variant="h3"
        component="h2"
        sx={{ marginBottom: "30px", color: "#003D5B" }}
      >
        Ver alarma
      </Typography>
      <Box sx={{ display: "flex" }}>
        <AlarmCard />
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
          <Typography variant="h5" component="p">
            <strong>Nombre: Despertador</strong>
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="h3"
        component="h2"
        sx={{ marginBottom: "30px", marginTop: "30px", color: "#003D5B" }}
      >
        Imagenes asociadas
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
      <Image
        alt="logo"
        src="/add-circle.png"
        width={100}
        height={100}
        style={{ marginBottom: "70px" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          marginTop: "150",
          marginRight: "50px",
        }}
      >
        <Link href="/inicio" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#EEE5E9",
              color: "black",
              textTransform: "none",
              width: "229px",
              height: "61px",
            }}
          >
            Regresar
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
