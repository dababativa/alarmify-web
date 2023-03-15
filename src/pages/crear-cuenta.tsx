import { CustomInput } from "@/components";
import { Box, Button, Dialog, DialogTitle, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Background from "../../public/background.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ marginLeft: "50px", marginTop: "20px" }}>
      <Typography variant="h3" component="h1" sx={{ marginBottom: "25px" }}>
        Crear cuenta
      </Typography>
      <CustomInput
        label="Usuario"
        type="email"
        variant="outlined"
        sx={{ marginBottom: "20px" }}
      />
      <CustomInput
        label="Contraseña"
        type="password"
        variant="outlined"
        sx={{ marginBottom: "20px" }}
      />
      <CustomInput
        label="Repetir contraseña"
        type="password"
        variant="outlined"
        sx={{ marginBottom: "20px" }}
      />
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
      >
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          sx={{
            backgroundColor: "#EEE5E9",
            color: "black",
            textTransform: "none",
            width: "229px",
            height: "61px",
          }}
        >
          Crear cuenta
        </Button>
      </Box>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "100px",
            marginRight: "100px",
            flexDirection: "column",
            marginBottom: "50px",
            marginTop: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              alt="logo"
              src="/check-circle.png"
              width={100}
              height={100}
            />
          </Box>
          <Typography variant="h3" component="div" sx={{ textAlign: "center" }}>
            Cuenta creada con exito
          </Typography>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button
                variant="contained"
                onClick={() => setOpen(true)}
                sx={{
                  backgroundColor: "#EEE5E9",
                  color: "black",
                  textTransform: "none",
                  width: "229px",
                  height: "61px",
                }}
              >
                Regresar al inicio
              </Button>
            </Box>
          </Link>
        </Box>
      </Dialog>
    </Box>
  );
}
