export type TUserSocialLinksType = {
  title: string;
  icon: string;
  url: string;
};

export type TUserEducationType = {
  faculty: string;
  branch: string;
  institute: string;
  yearOfPassing: string;
  percentage: string;
};

export type TUserCertificationsType = {
  certificationName: string;
  certificationDescription: string;
  certificationAuthority: string;
  certificationDate: string;
  certificationLogo: string;
  certificationImage: string;
  certificationBadge: string;
};

export type TUserWorkExperienceType = {
  companyName: string;
  designation: string;
  yearOfJoining: string;
  yearOfLeaving: string;
};

export type TUserSkillsType = {
  skillName: string;
  skillLevel: string;
  skillShortDescription: string;
  skillLongDescription: string;
  skillLogo: string;
};

export type TUserServicesWorkType = {
  type: string;
  title: string;
  description: string;
  icons: Array<string>;
  concept: string;
  design: string;
  protoType: string;
};

export type TUserProjectsType = {
  projectName: string;
  projectDescription: string;
  projectTechnologies: Array<string>;
  projectImageURL: Array<string>;
  projectLinkURL: Array<string>;
};

export type TUserPortfolioTypeInterface = {
  userName: string;
  userEmailAdd: string;
  userPhoneNum: string;
  userAddress: string;
  userPinCode: string;
  userObjectiv1: string;
  userObjectiv2: string;
  userObjectiv3: string;
  userSocialLinks: Array<TUserSocialLinksType>;
  userEducation: Array<TUserEducationType>;
  userCertifications: Array<TUserCertificationsType>;
  userWorkExperience: Array<TUserWorkExperienceType>;
  userSkills: Array<TUserSkillsType>;
  userServicesWork: Array<TUserServicesWorkType>;
  userProjects: Array<TUserProjectsType>;
};
