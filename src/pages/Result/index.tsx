import { DownloadOutlined } from "@ant-design/icons";

import { LinkButton, SecondaryButton } from "../../components/Button";

import { styles } from "../../assets/styles";
import { ResultTable } from "./ResultTable";

export const Result = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading2}>Result</h2>
      <div className="flex justify-between">
        <p>
          <span className={styles.label}>Date Range: </span>
          05/07/2020 - 05/07/2022
        </p>
        <div className="flex gap-5">
          <LinkButton
            icon={<DownloadOutlined />}
            className="text-primary font-bold"
          >
            Download
          </LinkButton>
        </div>
      </div>

      {/* Result Table */}
      <ResultTable />
      <div className="flex items-center gap-5">
        <SecondaryButton>Exit</SecondaryButton>
      </div>
    </section>
  );
};