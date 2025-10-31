import React, { useState } from "react";
import {
    Box,
    Collapse,
    Typography,
    TextField,
    InputAdornment,
    Button,
    Grid,
    Select,
    MenuItem,
    CardContent,
    Fab,
    IconButton,
    Toolbar,
    AppBar,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import {
    SwipeableList,
    SwipeableListItem,
    TrailingActions,
    SwipeAction,
    Type as SwipeType,
} from "react-swipeable-list";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "react-swipeable-list/dist/styles.css";

interface IncidentListProps {
    onAddClick: () => void;
}

export default function IncidentList({
    onAddClick,
}: IncidentListProps) {
    const [showSearch, setShowSearch] = useState(false);
    const [type, setType] = useState("ทั้งหมด");
    const [location, setLocation] = useState("ทั้งหมด");
    const [fromDate, setFromDate] = useState(dayjs());
    const [toDate, setToDate] = useState(dayjs());
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

    const trailingActions = (item: any) => (
        <TrailingActions>
            <SwipeAction onClick={() => alert(`แก้ไข: ${item.title}`)}>
                <div
                    className="flex justify-center items-center bg-linear-to-tr from-yellow-400 to-yellow-200 text-white"
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
                    className="flex justify-center items-center bg-linear-to-tr from-blue-600 to-blue-400 text-white"
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
        <Box className="relative flex flex-col h-full app-background p-0 ">
            {/* ✅ AppBar ของหน้า List */}
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    top: 56, // อยู่ใต้ AppBar หลัก
                    backgroundColor: "#f8fafc",
                    color: "#0D47A1",
                    borderBottom: "1px solid #e0e0e0",
                }}
            >
                <Toolbar className="flex justify-between">
                    <TextField
                        variant="outlined"
                        placeholder="ค้นหาชื่อเหตุการณ์..."
                        size="small"
                        fullWidth
                        sx={{
                            backgroundColor: "white",
                            borderRadius: 2,
                            "& .MuiOutlinedInput-root": { fontSize: "0.9rem" },
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchRoundedIcon color="action" />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <IconButton
                        onClick={() => setShowSearch((prev) => !prev)}
                        sx={{ ml: 1 }}
                    >
                        <FilterListRoundedIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* ✅ Advance Search */}
            <Collapse in={showSearch} timeout={300} unmountOnExit >
                <Box className="p-3 bg-gray-50 border-b border-gray-200">
                    <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, color: "#0D47A1", mb: 1 }}
                    >
                        Advance Search
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <Typography variant="caption">ประเภทเหตุการณ์</Typography>
                            <Select
                                fullWidth
                                size="small"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                sx={{ backgroundColor: "white", borderRadius: 1 }}
                            >
                                <MenuItem value="ทั้งหมด">ทั้งหมด</MenuItem>
                                <MenuItem value="อาชญากรรม">อาชญากรรม</MenuItem>
                                <MenuItem value="ภัยธรรมชาติ">ภัยธรรมชาติ</MenuItem>
                            </Select>
                        </Grid>

                        <Grid size={12}>
                            <Typography variant="caption">สถานที่ปฏิบัติงาน</Typography>
                            <Select
                                fullWidth
                                size="small"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                sx={{ backgroundColor: "white", borderRadius: 1 }}
                            >
                                <MenuItem value="ทั้งหมด">ทั้งหมด</MenuItem>
                                <MenuItem value="หมู่บ้านพฤกษาสวรรค์">หมู่บ้านพฤกษาสวรรค์</MenuItem>
                                <MenuItem value="หมู่บ้านอยู่สบาย">หมู่บ้านอยู่สบาย</MenuItem>
                            </Select>
                        </Grid>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Grid size={6}>
                                <Typography variant="caption">จากวันที่</Typography>
                                <DatePicker
                                    value={fromDate}
                                    onChange={(v) => setFromDate(v!)}
                                    slotProps={{
                                        textField: {
                                            size: "small",
                                            fullWidth: true,
                                            sx: { backgroundColor: "white", borderRadius: 1 },
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid size={6}>
                                <Typography variant="caption">ถึงวันที่</Typography>
                                <DatePicker
                                    value={toDate}
                                    onChange={(v) => setToDate(v!)}
                                    slotProps={{
                                        textField: {
                                            size: "small",
                                            fullWidth: true,
                                            sx: { backgroundColor: "white", borderRadius: 1 },
                                        },
                                    }}
                                />
                            </Grid>
                        </LocalizationProvider>

                        <Grid size={12}>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    mt: 1,
                                    backgroundColor: "#fbbf24",
                                    color: "black",
                                    fontWeight: 600,
                                    borderRadius: 2,
                                    py: 1,
                                    "&:hover": { backgroundColor: "#facc15" },
                                }}
                                startIcon={<SearchRoundedIcon />}
                            >
                                ค้นหา
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Collapse>

            {/* ✅ รายการเหตุการณ์ */}
            <Box className="relative flex flex-col  p-3 ">
                <SwipeableList type={SwipeType.IOS}>
                    {incidents.map((item, idx) => (
                        <SwipeableListItem key={idx} trailingActions={trailingActions(item)} className="mb-3  rounded-2xl shadow-sm">
                            <div className="bg-white  w-full overflow-hidden  ">
                                <CardContent>
                                    {/* Tag */}
                                    <div
                                        className="absolute top-0 right-0 w-20 h-8 flex justify-center bg-linear-to-tr from-[#ffffff0f] to-[#ffffff71] items-center rounded-bl-lg shadow-sm"
                                        style={{ backgroundColor: item.tagColor }}
                                    >
                                        <Typography variant="caption" color="white">
                                            {item.tag}
                                        </Typography>
                                    </div>
                                    <Typography variant="subtitle1" className="font-semibold">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.location}
                                    </Typography>
                                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
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




            <Fab
                color="primary"
                sx={{
                    position: "fixed",
                    bottom: 30,
                    right: 16,
                    backgroundColor: "#0D47A1",
                }}
                onClick={onAddClick}
            >
                <AddRoundedIcon />
            </Fab>
        </Box>
    );
}
