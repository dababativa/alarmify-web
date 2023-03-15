import { input } from "@/styles";
import { Typography, TextField, Box } from "@mui/material";

type props = {
  label: string;
  required?: boolean;
  helpIcon?: boolean;
  helpIconTooltip?: string | ReactJSXElement;
};
const CustomLabel = ({ label, required }: props) => {
  return (
    <Typography
      sx={{ display: "flex", alignItems: "center" }}
      component="p"
      variant="subtitle1"
    >
      {label}
      {required && " * "}
    </Typography>
  );
};

type inputProps = {
  name?: string;
  type?: string;
  variant?: "standard" | "filled" | "outlined" | undefined;
  label: string;
  sx?: any;
  rows?: number | undefined;
  defaultValue?: string | undefined;
};

const CustomInput = ({
  type,
  variant,
  label,
  rows,
  sx,
  defaultValue,
}: inputProps) => {
  return (
    <Box sx={sx}>
      <CustomLabel label={label} />
      <TextField
        type={type}
        rows={rows}
        minRows={rows}
        size="small"
        defaultValue={defaultValue || ""}
        variant={variant}
        sx={input}
      />
    </Box>
  );
};

export default CustomInput;
