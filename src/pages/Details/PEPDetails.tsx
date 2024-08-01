import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { styles } from "../../assets/styles";
import { NewsDetailItem } from "../../api/details.api";
import { queryClient } from "../../utils/react-query.service";
import { endpoints } from "../../utils/api.service";

export const PEPDetails = () => {
  const location = useLocation();
  const personData = location.state;
  console.log("person data", personData);

  const cachedData: NewsDetailItem[] | undefined = queryClient.getQueryData<
    NewsDetailItem[]
  >(endpoints.details.cacheKey);
  console.log("API data", cachedData);

  useEffect(() => {}, []);

  const details = [
    { label: "PEP Type", value: "Primary" },
    { label: "AKA (English)", value: ["Imran Khan", "Imran"] },
    { label: "AKA (Urdu)", value: ["عمران خان", "عمران"] },
    { label: "Organization", value: ["Govt. of Pakistan", "PTI"] },
    {
      label: "Designation",
      value: [
        "Prime Minister of Pakistan",
        "Chancellor of University of Bradford",
      ],
    },
    { label: "Date", value: "05/07/2020 - 05/07/2022" },
    { label: "Keywords", value: ["Corruption", "Bribery", "Money Laundering"] },
  ];

  return (
    <div className={styles.box}>
      <h3 className={`${styles.heading3}`}>PEP Details</h3>
      <div className="flex flex-col gap-5">
        {details.map((detail, index) => (
          <div key={index} className="flex flex-row">
            <p className={`${styles.label} w-1/3`}>{detail.label}</p>
            <div className="w-2/3">
              {Array.isArray(detail.value) ? (
                detail.value.map((item, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <span className="text-light_gray"> | </span>}
                    {item}
                  </React.Fragment>
                ))
              ) : (
                <span>{detail.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
