// import { Box, IconButton, useTheme } from "@mui/material";
// import { useContext } from "react";
// import { ColorModeContext, tokens } from "../../theme";
// import InputBase from "@mui/material/InputBase";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchIcon from "@mui/icons-material/Search";

// const Topbar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const colorMode = useContext(ColorModeContext);

//   return (
//     <Box display="flex" justifyContent="space-between" p={2} position="relative" left="280px" width="1145px">
//       {/* SEARCH BAR */}
//       <Box
//         display="flex"
//         backgroundColor={colors.primary[400]}
//         borderRadius="3px"
//       >
//         <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
//         <IconButton type="button" sx={{ p: 1 }}>
//           <SearchIcon />
//         </IconButton>
//       </Box>

//       {/* ICONS */}
//       <Box display="flex">
//         <IconButton onClick={colorMode.toggleColorMode}>
//           {theme.palette.mode === "dark" ? (
//             <DarkModeOutlinedIcon />
//           ) : (
//             <LightModeOutlinedIcon />
//           )}
//         </IconButton>
//         <IconButton>
//           <NotificationsOutlinedIcon />
//         </IconButton>
//         <IconButton>
//           <SettingsOutlinedIcon />
//         </IconButton>
//         <IconButton>
//           <PersonOutlinedIcon />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// };

// export default Topbar;
import { Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      className="topbar"
      sx={{
        position: "relative",
        left: isMobile ? "0px" : "280px", // Adjust positioning for mobile
        width: isMobile ? "100%" : "1145px", // Full width on mobile
      }}
    >
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        className="search-bar"
        sx={{
          flexGrow: isMobile ? 1 : 0.5, // Search bar takes more space on mobile
        }}
      >
        <InputBase
          sx={{
            ml: 2,
            flex: 1,
          }}
          placeholder="Search"
        />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box
        display="flex"
        justifyContent={isMobile ? "flex-end" : "space-between"} // Icons align to the right on mobile
        sx={{ gap: isMobile ? "8px" : "16px" }} // Spacing between icons
      >
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;

