import withLayoutBasic from "@/libs/components/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Community: NextPage = () => {
    console.log("COMMUNUTY COMPONENT -- PAGES ROUTER")
    return (
        <div>
            <Container>
                COMMUNITY PAGE
            </Container>
        </div>
    )
}

export default withLayoutBasic(Community);