import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TopAgentCard from "./TopAgentCard";

const TopAgents = () => {
    const [topAgents] = useState<number[]>([1, 2, 3, 4, 5]);

    return (
        <Stack className={"top-agents"}>
            <Stack className={"container"}>
                <Stack className={"info-box"}>
                    <Box className={"left"}>
                        <span>Top Agents</span>
                        <p>Our Top Agents always ready to serve you</p>
                    </Box>

                    <Box className={"right"}>
                        <div className={"more-box"}>
                            <span>See All Agents</span>
                            <img src="/img/icons/rightup.svg" alt="" />
                        </div>
                    </Box>
                </Stack>

                <Stack className={"wrapper"}>
                    {/* LEFT ARROW */}
                    <Box className={"switch-btn swiper-agents-prev"}>
                        <ArrowBackIosNewIcon />
                    </Box>

                    <Box className={"card-wrapper"}>
                        {topAgents.length === 0 ? (
                            <Box className={"empty-list"}>Agents Empty</Box>
                        ) : (
                            <Swiper
                                className={"top-agents-swiper"}
                                slidesPerView={5}     // ✅ exactly 5 agents, no half
                                spaceBetween={29}
                                navigation={{
                                    nextEl: ".swiper-agents-next",
                                    prevEl: ".swiper-agents-prev",
                                }}
                            >
                                {topAgents.map((_, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className={"top-agents-slide"}
                                    >
                                        <TopAgentCard />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </Box>

                    {/* RIGHT ARROW (rotated by CSS) */}
                    <Box className={"switch-btn swiper-agents-next"}>
                        <ArrowBackIosNewIcon />
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default TopAgents;
