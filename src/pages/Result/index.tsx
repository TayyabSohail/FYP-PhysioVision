import { useContext } from "react";

import { DownloadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { LinkButton, SecondaryButton } from "../../components/Button";

import { ROUTES } from "../../constants/routes";

import { styles } from "../../assets/styles";
import { ResultTable } from "./ResultTable";

import { DateRangeContext } from "../../contexts/DateRangeContext";

export const Result = () => {
  const navigate = useNavigate();
  const handleExitButton = () => {
    navigate(ROUTES.home);
  };
  const { startDate, endDate } = useContext(DateRangeContext);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading2}>Result</h2>
      <div className="flex justify-between">
        <p>
          <span className={styles.label}>Date Range: </span>
          {startDate} - {endDate}
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
        <SecondaryButton onClick={handleExitButton}>Exit</SecondaryButton>
      </div>
    </section>
  );
};
