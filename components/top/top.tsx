import HashLink from "../UI/hashLink";
import classes from "./top.module.css";
import BtnMedium from "../UI/btnMedium";
import { profile_data } from "@/data/data";
import Image from "next/image";
import origamiImage from "@/public/images/origami.png";
import { TOP_IMAGE_SIZE } from "@/constants";

export default function Top() {
    return (
        <div className={classes.contentBox}>
            <div className={classes.textBox}>
                <h2 className={classes.mainText}>
                    <span className={classes.mainTextName}>
                        Hi, I&apos;m Shiori,
                    </span>
                    <span className={classes.mainTextJobTitle}>
                        Full-stack Developer.
                    </span>
                </h2>
                <p className={classes.mainTextSub}>
                    {profile_data.top_page_description}
                </p>
                <div className={classes.introButtonFrame}>
                    <HashLink href="/#contact">
                        <BtnMedium>Get in Touch !</BtnMedium>
                    </HashLink>
                </div>
            </div>
            <div className={classes.topImgFrame}>
                <Image
                    src={origamiImage}
                    alt="Origami crane illustration"
                    priority
                    sizes={TOP_IMAGE_SIZE}
                />
            </div>
        </div>
    )
}