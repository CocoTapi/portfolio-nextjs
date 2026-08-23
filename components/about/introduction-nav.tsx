"use client";

import { useState } from "react";
import classes from "./introduction-nav.module.css";
import { ProfileProps } from "@/util/types";
import SmallButton from "../UI/btnSmall";
import { FaChevronDown } from "react-icons/fa";


export default function IntroductionNav({ profile }: ProfileProps): React.ReactNode {
  const [showLong, setShowLong] = useState(false);

  function handleLongVer() {
    setShowLong(true);
  }

  function handleShortVer() {
    setShowLong(!showLong);
  }

  const stanzas = showLong
    ? profile.long_self_introduction
    : profile.short_self_introduction;

  return (
    <div>
      <div className={classes.myStoryLabel}>
        <h2>My Story</h2>
        {showLong ? 
          <button className={classes.seeLongButton} onClick={handleShortVer}>See Short Version <FaChevronDown className={classes.underIcon} /></button> : 
          <button className={classes.seeLongButton} onClick={handleShortVer}>See Long Version <FaChevronDown className={classes.underIcon} /></button>
        }
      </div>
      <div className={classes.paragraphGroup}>
        {stanzas.map((stanza, i) => (
          <p key={i}>{stanza}</p>
        ))}
      </div>
    </div>
  );
}
