import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../components/site-chrome";
import { ProcessSection } from "../components/portfolio-sections";
export const metadata:Metadata={title:"How I Work",description:"From the first conversation to launch: discover, plan, design, develop, review, and hand over."};
export default function ProcessPage(){return <><SiteHeader/><main id="main"><ProcessSection standalone/></main><SiteFooter/></>}
