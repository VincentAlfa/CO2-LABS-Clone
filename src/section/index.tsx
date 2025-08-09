import { lazy } from 'react';

export const HeroSection = lazy(() => import('./home/hero/hero'));
export const OurService = lazy(() => import('./home/our-service/our-service'));
export const MethodologySection = lazy(() => import('./home/methodology/methodology'));
export const AboutUsSection = lazy(() => import('./home/about-us/about-us'));
export const TeamSection = lazy(() => import('./home/team/team'));
export const PortfolioSection = lazy(() => import('./home/portfolio/portfolio'));
export const ContactSection = lazy(() => import('./home/contact/contact'));
