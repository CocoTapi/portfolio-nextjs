import Link from "next/link";
import classes from "./top.module.css";
import BtnMedium from "../UI/btnMedium";
import { profile_data } from "@/data/data";
import Image from "next/image";
0

export default function Top() {
    return (
        <div className={classes.contentBox}>
            <div className={classes.textBox}>
                <h2 className={classes.mainText}>
                    <span className={classes.mainTextName}>
                        Hi, I'm Shiori,
                    </span>
                    <span className={classes.mainTextJobTitle}>
                        Full-stack Developer.
                    </span>
                </h2>
                <p className={classes.mainTextSub}>
                    {profile_data.top_page_description}
                </p>
                <div className={classes.introButtonFrame}>
                    <Link href="#contact">
                        <BtnMedium>Get in Touch !</BtnMedium>
                    </Link>
                </div>
            </div>
            <div className={classes.topImgFrame}>
                <img 
                    src="/images/origami.png"
                    alt="Top image"
                />
            </div>
        </div>
    )
}