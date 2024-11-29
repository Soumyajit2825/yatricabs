"use client";

import Image from "next/image";
import Link from "next/link";
import "./download.css";
import Google from "../../../public/googleplay.svg";
import Apple from "../../../public/appstore.svg";

export default function DownloadBanner() {
  return (
    <div className="banner">
      <div className="section">
        <h2 className="title">Transparent Billing</h2>
        <p className="subtitle">GPS Based Billing | No Km Tampering</p>
      </div>

      <div className="downloadSection">
        <h2 className="downloadTitle">Download Now!</h2>
        <div className="storeButtons">
          <Link
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="storeLink"
          >
            <Image
              src={Google}
              alt="Get it on Google Play"
              width={135}
              height={40}
              className="storeImage"
            />
          </Link>
          <Link
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="storeLink"
          >
            <Image
              src={Apple}
              alt="Download on the App Store"
              width={135}
              height={40}
              className="storeImage"
            />
          </Link>
        </div>
      </div>

      <div className="section">
        <h2 className="title">No return fare</h2>
        <p className="subtitle">One-Way cab fare | No hidden charges</p>
      </div>
    </div>
  );
}
