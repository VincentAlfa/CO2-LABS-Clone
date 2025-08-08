import { lazy } from "react";

export const HeroSection = lazy(() => import("./hero/hero"));
export const OurService = lazy(() => import("./our-service/our-service"));
export const MethodologySection = lazy(() => import("./methodology/methodology"));
export const AboutUsSection = lazy(() => import("./about-us/about-us"));
export const TeamSection = lazy(() => import("./team/team"));
export const PortfolioSection = lazy(() => import("./portfolio/portfolio"));
export const ContactSection = lazy(() => import("./contact/contact"));
