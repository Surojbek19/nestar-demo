import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const AgentList: NextPage = () => {
    const device = useDeviceDetect();
    if (device === "mobile") {
        return (
            <Stack>MOBILE AGENTS LIST</Stack>
        )
    } else {
        return (
            <div style={{ margin: "20px 0" }}>
                <Stack className="container">AGENTS LIST</Stack>
            </div>
        )
    }
}

export default withLayoutBasic(AgentList);