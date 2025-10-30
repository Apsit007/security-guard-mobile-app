import React from "react";
import {
    Drawer,
    Avatar,
    Typography,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
} from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import { useNavigate } from "react-router-dom";

const drawerWidth = 260;

interface SidebarProps {
    open: boolean;
    onClose: () => void;
    role?: "guard" | "chief" | "supervisor"; // ✅ เพิ่มประเภทผู้ใช้
    profile?: {
        name: string;
        position: string;
        image?: string;
    };
}

const Sidebar: React.FC<SidebarProps> = ({
    open,
    onClose,
    role = "guard",
    profile,
}) => {
    const navigate = useNavigate();

    // ✅ เมนูของแต่ละระดับ
    const menuByRole: Record<
        "guard" | "chief" | "supervisor",
        { label: string; icon: React.ReactNode; path?: string }[]
    > = {
        guard: [
            { label: "หน้าหลัก", icon: <HomeRoundedIcon />, path: "/" },
            { label: "รายงานเหตุการณ์", icon: <DescriptionRoundedIcon /> },
            { label: "รายงานสำรวจพื้นที่", icon: <MapRoundedIcon /> },
            { label: "จัดตารางงาน", icon: <EventAvailableRoundedIcon /> },
            { label: "อนุมัติการลา", icon: <DirectionsCarRoundedIcon /> },
            { label: "บันทึกการทำงาน", icon: <AccessTimeRoundedIcon /> },
        ],
        chief: [
            { label: "หน้าหลัก", icon: <HomeRoundedIcon />, path: "/" },
            { label: "ลงเวลาเข้า-ออกงาน", icon: <AccessTimeRoundedIcon /> },
            { label: "บันทึกเหตุการณ์", icon: <DescriptionRoundedIcon />, path: "/incident" },

            { label: "บันทึกสำรวจพื้นที่", icon: <MapRoundedIcon /> },
            { label: "บันทึกการลา", icon: <DirectionsCarRoundedIcon /> },
        ],
        supervisor: [
            { label: "หน้าหลัก", icon: <HomeRoundedIcon />, path: "/" },
            { label: "บันทึกเหตุการณ์", icon: <DescriptionRoundedIcon />, path: "/incident" },
            { label: "บันทึกสำรวจพื้นที่", icon: <MapRoundedIcon /> },
        ],
    };

    const menuItems = menuByRole[role];

    return (
        <Drawer
            open={open}
            onClose={onClose}
            variant="temporary"
            ModalProps={{
                keepMounted: true,
                BackdropProps: {
                    sx: {
                        backgroundColor: "rgba(0,0,0,0.35)",
                        backdropFilter: "blur(2px)",
                    },
                },
            }}
            PaperProps={{
                sx: {
                    width: drawerWidth,
                    backgroundColor: "#0D47A1",
                    color: "white",
                    borderTopRightRadius: 24,
                    borderBottomRightRadius: 24,
                    boxShadow: "8px 0 16px rgba(0,0,0,0.25)",
                    zIndex: 2000,
                },
            }}
        >
            <Box className="flex flex-col h-full pt-safe">
                {/* ✅ Header Profile */}
                <div className="flex flex-col items-center py-5 space-y-2">
                    <img src="/logo.svg" alt="GO" className="h-6 mb-1" />
                    <Avatar
                        alt={profile?.name || "ผู้ใช้งาน"}
                        src={profile?.image || "/guard.jpg"}
                        sx={{
                            width: 80,
                            height: 80,
                            border: "2px solid #fff",
                        }}
                    />
                    <Typography variant="subtitle1" className="font-semibold">
                        {profile?.name || "ชื่อผู้ใช้งาน"}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            backgroundColor: "rgba(255,255,255,0.15)",
                            px: 1.5,
                            py: 0.3,
                            borderRadius: 1,
                        }}
                    >
                        {profile?.position ||
                            (role === "chief"
                                ? "หัวหน้า รปภ."
                                : role === "supervisor"
                                    ? "หัวหน้าชุด รปภ."
                                    : "เจ้าหน้าที่ รปภ.")}
                    </Typography>
                </div>

                <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

                {/* ✅ รายการเมนู */}
                <List>
                    {menuItems.map((item) => (
                        <ListItemButton
                            key={item.label}
                            onClick={() => {
                                onClose();
                                if (item.path) navigate(item.path);
                            }}
                            className="rounded-lg mx-2 my-1 hover:bg-blue-700"
                        >
                            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    ))}
                </List>

                {/* ✅ Logout */}
                <div className="mt-auto p-4">
                    <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />
                    <ListItemButton className="rounded-lg mt-2 hover:bg-blue-700">
                        <ListItemIcon sx={{ color: "white" }}>
                            <LogoutRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="ออกจากระบบ" />
                    </ListItemButton>
                </div>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
