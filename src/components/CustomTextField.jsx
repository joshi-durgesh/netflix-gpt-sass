import { TextField, styled } from "@mui/material";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid grey",
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "grey",
  },

  "& .MuiInputLabel-root": {
    color: "#fff",
  },

  "& .MuiInputBase-input": {
    color: "#fff",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
});

export default CustomTextField;
