import { Box, Stack } from "@mui/material"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
    return (
        <Stack className={"footer-container"}>
            <Stack className={"main"}>
                <Stack className={"left"}>
                    <Box component={"div"} className={"footer-box"}>
                        <img src="/img/logo/logoWhite.svg" alt="" className={"logo"} />
                    </Box>
                    <Box component={"div"} className={"footer-box"}>
                        <span>total free customer care</span>
                        <p>+82 10 1234 5678</p>
                    </Box>
                    <Box component={"div"} className={"footer-box"}>
                        <span>nee live</span>
                        <p>+82 10 1234 5678</p>
                        <span>Support?</span>
                    </Box>
                    <Box component={"div"} className={"footer-box"}>
                        <p>follow us on social media</p>
                        <div className={"media-box"}>
                            <FacebookOutlinedIcon />
                            <TelegramIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </div>
                    </Box>
                </Stack>
                <Stack className={"right"}>
                    <Box component={"div"} className={"top"}>
                        <strong>keep yourself up to date</strong>
                        <div>
                            <input type="text" placeholder={"Your Email"} />
                            <span>Subscribe</span>
                        </div>
                    </Box>
                    <Box component={"div"} className={"botton"}>
                        <div>
                            <strong>Popular Search</strong>
                            <span>Propert for Rent</span>
                            <span>Property Low to hide</span>
                        </div>
                        <div>
                            <strong>Quick Link</strong>
                            <span>Term of Use</span>
                            <span>Provacy Polciy</span>
                            <span>Pricing Plans</span>
                            <span>Our Service</span>
                            <span>Contact Support</span>
                            <span>FAQs</span>
                        </div>
                        <div>
                            <strong>Discover</strong>
                            <span>Seoul</span>
                            <span>Gyeonhido</span>
                            <span>Busan</span>
                            <span>Jejudo</span>
                        </div>
                    </Box>
                </Stack>
            </Stack>
            <Stack className={"second"}>
                <span>© Nestar - All rights reserved. Nestar 2026</span>
                <span>Privacy · Terms · Sitemap</span>
            </Stack>
        </Stack>
    )
}

export default Footer;