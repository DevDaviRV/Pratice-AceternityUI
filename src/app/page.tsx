import React from "react";
import { ThreeDCardDemo } from "../components/ThreeDCardDemo";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffect";
import { SparklesCoreConcept } from "@/components/SparklesCoreConcept";
import { LampDemo } from "@/components/LampDemo";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";

const page = () => {
    return (
        <div>
            <div className="container mx-auto">
                <ThreeDCardDemo />
                <GoogleGeminiEffectDemo />
                <ThreeDCardDemo />
                <SparklesCoreConcept />
                <LampDemo />
                <CardHoverEffectDemo />
                <HeroScrollDemo />
                <HeroParallaxDemo />
            </div>
        </div>
    );
};

export default page;
