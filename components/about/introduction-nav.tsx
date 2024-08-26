"use client";

import { useState } from "react";
import classes from "../css/about-css/introduction-nav.module.css";
import { ProfileProps } from "@/util/types";

export default function IntroductionNav({ profile }: ProfileProps) {
  const [showLong, setShowLong] = useState(false);

  function handleLongVer() {
    setShowLong(true);
  }

  function handleShortVer() {
    setShowLong(false);
  }

  return (
    <div>
      <nav className={classes.ctrButtons}>
        <h4
          onClick={handleShortVer}
          className={showLong ? classes.nonActive : classes.active}
        >
          Short Version
        </h4>
        <h4
          onClick={handleLongVer}
          className={showLong ? classes.active : classes.nonActive}
        >
          Long Version
        </h4>
      </nav>
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
