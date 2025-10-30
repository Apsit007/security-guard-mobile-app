import React from "react";
import { Card, Typography, IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function Home() {
    return (
        <div className="relative h-full">
            {/* mock map */}
            <div className="w-full h-full bg-[url('/map-placeholder.png')] bg-cover bg-center"></div>

            {/* bottom info */}
            <Card
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    backgroundColor: "#0D47A1",
                    color: "white",
                    paddingBottom: "env(safe-area-inset-bottom)",
                }}
                elevation={6}
            >
                <div className="flex items-center justify-between px-4 pt-2">
                    <Typography variant="subtitle1" className="font-semibold">
                        A1 : หมู่บ้านอยู่สบาย
                    </Typography>
                    <IconButton size="small" sx={{ color: "white" }}>
                        <CloseRoundedIcon />
                    </IconButton>
                </div>

                <Typography variant="body2" className="px-4 opacity-80">
                    16.1991805, 103.2841473
                </Typography>

                <div className="grid grid-cols-5 gap-1 p-3 text-center">
                    {[
                        { label: "ตามแผน", value: 6 },
                        { label: "มาทำงาน", value: 3 },
                        { label: "ขาด", value: 1 },
                        { label: "สาย", value: 0 },
                        { label: "เหตุการณ์", value: 1 },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="bg-white text-blue-900 rounded-xl py-2"
                        >
                            <Typography variant="h6" className="font-bold leading-none">
                                {item.value}
                            </Typography>
                            <Typography variant="caption">{item.label}</Typography>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}
