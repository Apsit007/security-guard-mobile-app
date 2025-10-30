import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface TopBarProps {
    onMenuClick: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onMenuClick }) => {
    return (
        <AppBar
            position="fixed"
            color="inherit"
            elevation={1}
            sx={{
                backgroundColor: "white",
                // ❌ อย่าใช้ zIndex: theme.zIndex.drawer + 1 เพราะจะบัง Drawer
                zIndex: 1200, // ✅ ต่ำกว่า Drawer (Drawer เริ่มต้น zIndex 1300)
                paddingTop: "env(safe-area-inset-top)",
            }}
        >
            <Toolbar className="flex justify-between" >
                <IconButton onClick={onMenuClick}>
                    <MenuIcon />
                </IconButton>

                <div className="flex items-center gap-1">
                    <img src="/logo_for_white.png" alt="GO" className="h-6" />

                </div>

                <Avatar
                    alt="User"
                    src="/guard.jpg"
                    sx={{ width: 36, height: 36 }}
                    className="border border-gray-300"
                />
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
