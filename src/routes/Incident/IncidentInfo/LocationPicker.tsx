import React from "react";
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";

interface LocationPickerProps {
    onSelect: (loc: string) => void;
}

export default function LocationPicker({ onSelect }: LocationPickerProps) {
    const locations = ["หมู่บ้านพฤกษาสวรรค์", "หมู่บ้านอยู่สบาย", "โค้งบ้านบึง"];

    return (
        <Box className="flex flex-col h-full bg-gray-50">
            <List>
                {locations.map((loc, idx) => (
                    <ListItem key={idx} disablePadding>
                        <ListItemButton onClick={() => onSelect(loc)}>
                            <ListItemText primary={loc} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
