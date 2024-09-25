import Box from "@mui/material/Box";

export default function MyContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        padding: 2,
        height: "100%",
        overflow: "auto",
      }}
    >
      {children}
    </Box>
  );
}