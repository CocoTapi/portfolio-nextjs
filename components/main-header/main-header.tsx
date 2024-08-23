import Link from "next/link";
import classes from "../css/main-header/main-header.module.css";
import NavLink from "./nav-link";
import { profile_data } from "../../data/data";

export default function MainHeader(){
    return (
        <header className={classes.header}>
            <Link href='/' >
            Logo
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="#projects" >Projects</Link>
                    </li>
                    <li>
                        <Link href="#about" >About</Link>
                    </li>
                    <li>
                        <a href={`mailto:${profile_data.my_email}`} >Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}