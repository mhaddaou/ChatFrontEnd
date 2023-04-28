import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./comp/Header";
import Footer from "./comp/footer";
import CircleImage from "./comp/Circl";
import Hoome from './comp/pages/index'

const inter = Inter({ subsets: ["latin"] });

export default function Home(){
  return (<Hoome></Hoome>);
}



