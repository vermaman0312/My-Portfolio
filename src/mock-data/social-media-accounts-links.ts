import React from "react";

export interface socialMediaLinkType {
  socialMediaId: string;
  title: string;
  urlImage: React.ReactNode;
  socialMediaURL: string;
}

export const socialMediaLinks: socialMediaLinkType[] = [
  {
    socialMediaId: "001",
    title: "Linkedin",
    urlImage: null,
    socialMediaURL: "https://in.linkedin.com/in/aman-verma-198472219",
  },
  {
    socialMediaId: "002",
    title: "Github",
    urlImage: null,
    socialMediaURL: "https://github.com/vermaman0312",
  },
  {
    socialMediaId: "003",
    title: "Twitter",
    urlImage: null,
    socialMediaURL: "",
  },
  {
    socialMediaId: "004",
    title: "Instagram",
    urlImage: null,
    socialMediaURL: "",
  },
  {
    socialMediaId: "005",
    title: "Facebook",
    urlImage: null,
    socialMediaURL: "",
  },
  {
    socialMediaId: "006",
    title: "Stack Overflow",
    urlImage: null,
    socialMediaURL: "",
  },
];
