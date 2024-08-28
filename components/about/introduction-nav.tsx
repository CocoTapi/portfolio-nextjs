"use client";

import { useState } from "react";
import classes from "../css/about-css/introduction-nav.module.css";
import { ProfileProps } from "@/util/types";
import SmallButton from "../UI/small-button";
import { FaChevronDown } from "react-icons/fa";


export default function IntroductionNav({ profile }: ProfileProps) {
  const [showLong, setShowLong] = useState(false);

  function handleLongVer() {
    setShowLong(true);
  }

  function handleShortVer() {
    setShowLong(!showLong);
  }

  return (
    <div>
      <div className={classes.myStoryLabel}>
        <h3>My Story</h3>
        {showLong ? 
          <SmallButton colorScheme="primaryWhite" onClick={handleShortVer}>See Short Version <FaChevronDown className={classes.underIcon} /></SmallButton> : 
          <SmallButton colorScheme="primaryWhite" onClick={handleShortVer}>See Long Version <FaChevronDown className={classes.underIcon} /></SmallButton>
        }
      </div>
      {!showLong && <p>{profile.short_self_introduction}</p>}
      {showLong && (
        <div className={classes.longParagraph}>
          <p>{profile.long_self_introduction1}</p>
          <p>{profile.long_self_introduction2}</p>
          <p>{profile.long_self_introduction3}</p>
          {/* <p>{profile.long_self_introduction4}</p> */}
        </div>
      )}
    </div>
  );
}
