import { Stack } from "@mui/material";

const TopAgentCard = () => {
    return (
        <Stack className={"top-agents-card"}>
            <img src="/img/profile/Mel.jpeg" alt="Agent" />
            <strong>Martin</strong>
            <span>AGENT</span>
        </Stack>
    );
};

export default TopAgentCard;
