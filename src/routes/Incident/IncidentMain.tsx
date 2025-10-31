import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";
import IncidentList from "./IncidentList";
import LocationPicker from "./IncidentInfo/LocationPicker";

export default function IncidentMain() {
    const navigate = useNavigate();
    const [view, setView] = useState<"list" | "picker">("list");
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

    // 🔙 handle back
    const handleBack = () => {
        if (view === "picker") setView("list");
        else navigate("/");
    };

    return (
        <Box className="flex flex-col h-full bg-gray-50">
            {/* ✅ AppBar หลัก */}
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    backgroundColor: "white",
                    color: "#0D47A1",
                    borderBottom: "1px solid #e0e0e0",
                }}
            >
                <Toolbar>
                    <IconButton onClick={handleBack} size="small">
                        <ArrowBackRoundedIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ fontWeight: 600, ml: 1 }}>
                        {view === "list" ? "เหตุการณ์" : "เลือกสถานที่ปฏิบัติงาน"}
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* ✅ แสดงหน้าตามสถานะ */}
            {view === "list" && (
                <IncidentList
                    selectedLocation={selectedLocation}
                    onAddClick={() => setView("picker")}
                />
            )}

            {view === "picker" && (
                <LocationPicker
                    onSelect={(loc) => {
                        setSelectedLocation(loc);
                        setView("list");
                    }}
                />
            )}
        </Box>
    );
}
