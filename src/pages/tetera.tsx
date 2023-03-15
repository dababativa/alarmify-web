import { CustomInput } from "@/components";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Typography,
  TextField,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ marginLeft: "100px", marginTop: "40px" }}>
      <Typography
        variant="h2"
        component="div"
        sx={{ marginBottom: "30px", color: "#003D5B" }}
      >
        Alarmify
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "50px",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{ marginBottom: "30px", color: "#003D5B" }}
        >
          Editar imagen
        </Typography>
        <Image alt="logo" src="/basura.png" width={41} height={53} />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Image alt="logo" src="/tetera.jpg" width={431} height={346} />
        <Box sx={{ marginLeft: "60px" }}>
          <CustomInput
            label="Nombre"
            variant="outlined"
            sx={{ marginBottom: "20px", width: "400px" }}
            defaultValue="Tetera"
          />
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            component="p"
            variant="subtitle1"
          >
            Descripción
          </Typography>
          <TextField
            size="small"
            sx={{ width: "873px", height: "215px" }}
            multiline
            rows={5}
            defaultValue="Mi tetera favorita"
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end", marginTop: "200px" }}>
        <Box
          sx={{
            width: "700px",
            display: "flex",
            justifyContent: "space-evenly",
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
              Cancelar
            </Button>
          </Link>
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
              Guardar
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
