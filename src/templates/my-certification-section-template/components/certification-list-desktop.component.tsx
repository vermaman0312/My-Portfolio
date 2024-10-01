import React, { useCallback, useState } from "react";
import { CustomLabel } from "../../../components/custom-components/custom-label/component";
import { TUserCertificationsType } from "../../../types/portfolio.type";
import { imageMap } from "../../../portfolio/all-images";

type props = {
  data: Array<TUserCertificationsType>;
};

const PortfolioCertificationDesktopViewPageComponent = ({
  ...props
}: props) => {
  const [skillDetails, setSkillDetails] = useState<TUserCertificationsType>();

  const handleSetSkillDetails = useCallback((item: TUserCertificationsType) => {
    setSkillDetails(item);
  }, []);
  return (
    <div className="w-full h-full">
      <div className="void w-full" id="void">
        <div className="crop text-white">
          <ul id="card-list" className="flex gap-16">
            {props.data.map((item, index) => {
              return (
                <li
                  className="cursor-pointer"
                  onClick={() => handleSetSkillDetails(item)}
                >
                  <div className="card border-2 border-[#DAC5A7] border-opacity-60 bg-[#DAC5A7] bg-opacity-5">
                    <div className="w-full flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={
                            imageMap[
                              item.certificationImage as keyof typeof imageMap
                            ]
                          }
                          alt={item.certificationName as string}
                          className="w-8 h-8 object-cover"
                        />
                        <CustomLabel className="text-sm font-semibold font-display text-center">
                          {item.certificationName}
                        </CustomLabel>
                      </div>
                      <div>
                        <img
                          src={
                            imageMap[
                              item.certificationImage as keyof typeof imageMap
                            ]
                          }
                          alt={item.certificationName as string}
                          className="w-8 h-8 object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <CustomLabel className="text-xs font-light ml-10">
                        {item.certificationDescription}
                      </CustomLabel>
                    </div>
                    <div className="w-full flex items-center justify-between gap-2">
                      <CustomLabel className="text-xs font-semibold ml-10">
                        {item.certificationAuthority}
                      </CustomLabel>
                      <CustomLabel className="text-xs font-light ml-10">
                        {item.certificationDate}
                      </CustomLabel>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="last-circle"></div>
          <div className="second-circle"></div>
        </div>
        <div className="mask text-white flex items-center justify-start">
          {skillDetails ? (
            <div className="flex flex-col items-center justify-center pr-32">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={
                      imageMap[
                        skillDetails.certificationImage as keyof typeof imageMap
                      ]
                    }
                    alt={skillDetails.certificationName as string}
                    className="w-8 h-8 object-cover"
                  />
                  <CustomLabel className="text-xl text-[#DAC5A7] font-semibold font-display text-center">
                    {skillDetails.certificationName}
                  </CustomLabel>
                </div>
                <div>
                  <img
                    src={
                      imageMap[
                        skillDetails.certificationImage as keyof typeof imageMap
                      ]
                    }
                    alt={skillDetails.certificationName as string}
                    className="w-8 h-8 object-cover"
                  />
                </div>
              </div>

              <div className="mt-5">
                <CustomLabel className="text-xs font-display font-light ml-10">
                  {skillDetails.certificationDescription}
                </CustomLabel>
              </div>

              <div className="w-full flex items-center justify-between gap-2 mt-5">
                <CustomLabel className="text-xs font-display font-semibold ml-10">
                  {skillDetails.certificationAuthority}
                </CustomLabel>
                <CustomLabel className="text-xs font-display font-light ml-10">
                  {skillDetails.certificationDate}
                </CustomLabel>
              </div>
              <div className="w-full flex items-center justify-end gap-2 mt-5">
                <button className="text-xs font-display p-2">View Certificate</button>
              </div>
            </div>
          ) : (
            <div>
              <CustomLabel className="text-[#DAC5A7] font-display text-xs text-center mr-32">
                Certifications showcase my dedication to continuous learning and
                practical skill development, validating my expertise and
                readiness to apply the latest technologies in real-world
                projects.
              </CustomLabel>
            </div>
          )}
        </div>
        <div className="center-circle flex items-center justify-center">
          <CustomLabel className="text-3xl text-center font-display text-[#DAC5A7]">
            Certifications
          </CustomLabel>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCertificationDesktopViewPageComponent;
