import { Inter, Roboto } from "next/font/google";



const roboto = Roboto({subsets: ["latin"], weight:["100", "300", "500"], variable: "--font-roboto"});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export {inter, roboto}