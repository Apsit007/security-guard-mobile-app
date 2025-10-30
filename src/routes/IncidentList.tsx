import React from "react";
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Fab,
    Chip,
    CardContent,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import {
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
    Type as SwipeType,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import { useNavigate } from "react-router-dom";

export default function IncidentList() {
    const navigate = useNavigate();

    const incidents = [
        {
            title: "ทะเลาะวิวาทภายในครอบครัว",
            location: "หมู่บ้านพฤกษาสวรรค์ [อ.เมืองนนทบุรี จ.นนทบุรี]",
            date: "01/07/68",
            time: "11:00",
            tag: "ทะเลาะวิวาท",
            tagColor: "#1976d2",
        },
        {
            title: "ลักทรัพย์เวลากลางวัน",
            location: "หมู่บ้านอยู่สบาย [อ.เมืองนนทบุรี จ.นนทบุรี]",
            date: "01/07/68",
            time: "11:00",
            tag: "ลักทรัพย์",
            tagColor: "#d32f2f",
        },
        {
            title: "พายุฤดูร้อน",
            location: "โค้งบ้านบึง บ.รุ่งเรือง รอบเมือง",
            date: "07/07/68",
            time: "11:00",
            tag: "ภัยธรรมชาติ",
            tagColor: "#2e7d32",
        },
    ];

    // ✅ Action ที่จะแสดงเมื่อ swipe ไปทางซ้าย
    const trailingActions = (item: any) => (
        <TrailingActions>
            <SwipeAction onClick={() => alert(`แก้ไข: ${item.title}`)}>
                <div
                    className="flex justify-center items-center bg-yellow-400 text-white"
                    style={{ width: 64, height: "100%" }}
                >
                    <div className="flex flex-col items-center justify-center w-full">
                        <EditRoundedIcon />
                        <span className="text-xs">แก้ไข</span>
                    </div>
                </div>
            </SwipeAction>

            <SwipeAction destructive onClick={() => alert(`ลบ: ${item.title}`)}>
                <div
                    className="flex justify-center items-center bg-blue-600 text-white"
                    style={{ width: 64, height: "100%" }}
                >
                    <div className="flex flex-col items-center justify-center w-full">
                        <DeleteRoundedIcon />
                        <span className="text-xs">ลบ</span>
                    </div>
                </div>
            </SwipeAction>
        </TrailingActions>
    );

    return (
        <Box className="flex flex-col h-full bg-gray-50">
            {/* ✅ Top AppBar */}
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    backgroundColor: "white",
                    color: "#0D47A1",
                    borderBottom: "1px solid #e0e0e0",
                }}
            >
                <Toolbar className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <IconButton onClick={() => navigate(-1)} size="small">
                            <ArrowBackRoundedIcon />
                        </IconButton>
                        <Typography variant="h6" className="font-semibold">
                            เหตุการณ์
                        </Typography>
                    </div>

                    <div className="flex items-center gap-1">
                        <IconButton>
                            <SearchRoundedIcon />
                        </IconButton>
                        <IconButton>
                            <FilterListRoundedIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

            {/* ✅ Swipeable List */}
            <Box className="p-3 overflow-y-auto flex-1 pb-24">
                <SwipeableList type={SwipeType.IOS}>
                    {incidents.map((item, idx) => (
                        <SwipeableListItem
                            key={idx}
                            trailingActions={trailingActions(item)}
                            className="mb-3 rounded-2xl shadow-sm"
                        >
                            <div className="bg-white w-full overflow-hidden">
                                <CardContent className="relative flex flex-col gap-2">
                                    {/* Tag */}
                                    <div
                                        className="absolute top-0 right-0 w-20 h-8 flex justify-center items-center rounded-bl-lg"
                                        style={{ backgroundColor: item.tagColor }}
                                    >
                                        <Typography variant="caption" color="white">
                                            {item.tag}
                                        </Typography>
                                    </div>

                                    <Typography
                                        variant="subtitle1"
                                        className="font-semibold pr-20"
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        {item.location}
                                    </Typography>

                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <CalendarMonthRoundedIcon fontSize="small" color="primary" />
                                        <span>{item.date}</span>
                                        <span>{item.time}</span>
                                    </div>
                                </CardContent>
                            </div>
                        </SwipeableListItem>
                    ))}
                </SwipeableList>
            </Box>

            {/* ✅ Floating Add Button */}
            <Fab
                color="primary"
                sx={{
                    position: "fixed",
                    bottom: 30,
                    right: 16,
                    backgroundColor: "#0D47A1",
                }}
                onClick={() => alert("เปิดฟอร์มเพิ่มเหตุการณ์")}
            >
                <AddRoundedIcon />
            </Fab>
        </Box>
    );
}
