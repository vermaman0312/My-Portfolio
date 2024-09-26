import React from "react";

export type TUserSocialLinksType = {
  title: string | null;
  icon: React.ReactNode | null;
  url: string | null;
};

export type TUserEducationType = {
  faculty: string | null;
  branch: string | null;
  institute: string | null;
  yearOfPassing: string | null;
  percentage: string | null;
};

export type TUserCertificationsType = {
  certificationName: string | null;
  certificationDescription: string | null;
  certificationAuthority: string | null;
  certificationDate: string | null;
  certificationLogo: string | null;
  certificationImage: string | null;
  certificationBadge: string | null;
};

export type TUserWorkExperienceType = {
  companyName: string | null;
  designation: string | null;
  yearOfJoining: string | null;
  yearOfLeaving: string | null;
};

export type TUserSkillsType = {
  skillName: string | null;
  skillLevel: string | null;
  skillShortDescription: string | null;
  skillLongDescription: string | null;
  skillLogo: string | null;
};

export type TUserServicesWorkType = {
  type: string | null;
  title: string | null;
  description: string | null;
  icons: Array<string> | null;
  concept: string | null;
  design: string | null;
  protoType: string | null;
};

export type TUserProjectsType = {
  projectName: string | null;
  projectDescription: string | null;
  projectTechnologies: Array<string> | null;
  projectImageURL: Array<string> | null;
  projectLinkURL: Array<string> | null;
};

export type TUserPortfolioTypeInterface = {
  userName: string | null;
  userEmailAddress: string | null;
  userPhoneNumber: string | null;
  userAddress: string | null;
  userPinCode: string | null;
  userObjective1: string | null;
  userObjective2: string | null;
  userObjective3: string | null;
  userSocialLinks: Array<TUserSocialLinksType> | null;
  userEducation: Array<TUserEducationType> | null;
  userCertifications: Array<TUserCertificationsType> | null;
  userWorkExperience: Array<TUserWorkExperienceType> | null;
  userSkills: Array<TUserSkillsType> | null;
  userServicesWork: Array<TUserServicesWorkType> | null;
  userProjects: Array<TUserProjectsType> | null;
};
