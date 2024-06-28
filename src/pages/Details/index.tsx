import { Divider } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { SecondaryButton, LinkButton } from "../../components/Button";

import { LanguageFilter } from "./languageFilter";
import { PEPDetailsCard } from "./PEPDetails";
import { EventFilters} from "./Events/EventFilters";

import { styles } from "../../assets/styles";

export const Details = () => {
  return (
    <section className={styles.section}>
      <div className="!m-0 !p-0 flex flex-row gap-10">
        <h2 className={styles.heading2}>01 Imran Khan Niazi</h2>
        <h2 className={styles.heading2}>عمران خان نیازی</h2>
      </div>
      <div className=" !m-0 !p-0 flex justify-between">
        <p>
          <span className={styles.label}>Date Range: </span>
          05/07/2020 - 05/07/2022
        </p>

        <LinkButton
          icon={<DownloadOutlined />}
          className="text-primary font-bold"
        >
          Download
        </LinkButton>
      </div>

      <Divider style={{ backgroundColor: "lightgray", padding: 0 }} />

      {/* Add language filter */}
      <LanguageFilter />
      <div className="flex flex-row gap-5">
        <div className=" w-2/3">
          <EventFilters />
        </div>
        <div className="flex flex-col gap-6">
          <PEPDetailsCard />
          {/* add source component here */}
          <PEPDetailsCard />
        </div>
      </div>

      {/* add sections */}
      <div className="flex items-center gap-5">
        <SecondaryButton>Back</SecondaryButton>
      </div>
    </section>
  );
};
