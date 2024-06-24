import { useState, useEffect } from "react";

import { Image, Form, DatePicker, Upload } from "antd";
import {
  CalendarOutlined,
  UploadOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import { PrimaryButton, LinkButton } from "../components/Button";

import loginImage from "../assets/images/login.png";

import { styles } from "../assets/styles";

interface HomeData {
  startingDate: string;
  endingDate: string;
  screeningList: File | null;
}

export const Home = () => {
  const [form] = Form.useForm<HomeData>();

  // Submittable state for form submit button
  const [submittable, setSubmittable] = useState<boolean>(false);

  // Watch all values
  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  const handleFileUpload = (file) => {
    console.log("Uploaded file:", file);
    form.setFieldsValue({ screeningList: file });
    return false;
  };

  const handleRemoveFile = () => {
    form.setFieldsValue({ screeningList: null });
  };

  const onFinish = () => {
    form.validateFields();
  };

  return (
    <div className="w-full h-[93vh] flex">
      <Image
        preview={false}
        src={loginImage}
        alt="Login Image"
        height="100%"
        width={"50%"}
        className="m-0 object-cover"
      />

      <div className="w-1/2 h-full flex flex-col justify-center p-10 gap-10">
        {/* Page Title */}
        <div className="flex flex-col items-center gap-5">
          <h2 className={styles.heading3}>PEP Adverse NEWS Screening</h2>
          <h5 className={styles.heading5}>PEP and High Risk Entities Upload</h5>
        </div>

        <Form
          form={form}
          name="PepUploadForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          size="large"
          layout="vertical"
          className="w-full flex flex-col items-center gap-5"
          scrollToFirstError
          autoComplete="off"
        >
          <div className="min-w-[60%] flex gap-5">
            <Form.Item<HomeData>
              name="startingDate"
              label={<span className={styles.label}>Starting Date</span>}
              className="w-1/2 m-0"
              rules={[
                {
                  required: true,
                  message: "Please select the starting date!",
                },
              ]}
            >
              <DatePicker
                className="w-full !bg-[transparent] [&>input]:!bg-[transparent]"
                suffixIcon={<CalendarOutlined className="text-gray text-lg" />}
              />
            </Form.Item>

            <Form.Item<HomeData>
              name="endingDate"
              label={<span className={styles.label}>Ending Date</span>}
              className="w-1/2 m-0"
              rules={[
                {
                  required: true,
                  message: "Please select the ending date!",
                },
              ]}
            >
              <DatePicker
                className="w-full !bg-[transparent] [&>input]:!bg-[transparent]"
                suffixIcon={<CalendarOutlined className="text-gray text-lg" />}
              />
            </Form.Item>
          </div>
          <Form.Item<HomeData>
            name="screeningList"
            valuePropName="file"
            rules={[
              {
                required: true,
                message: "Please upload the screening list!",
              },
            ]}
            className="min-w-[60%] m-0"
          >
            {form.getFieldValue("screeningList") ? (
              <div className="flex justify-between items-center bg-light_blue rounded-lg p-3">
                <p className={styles.label}>
                  {form.getFieldValue("screeningList").file?.name}
                </p>
                <LinkButton
                  type="text"
                  icon={<DeleteOutlined />}
                  onClick={handleRemoveFile}
                >
                  Remove
                </LinkButton>
              </div>
            ) : (
              <Upload.Dragger
                accept=".xlsx,.csv,.xls"
                beforeUpload={handleFileUpload}
                maxCount={1}
              >
                <p className="ant-upload-drag-icon">
                  <UploadOutlined />
                </p>
                <p className={`${styles.label} hover:!text-primary`}>
                  Upload Screening List
                </p>
              </Upload.Dragger>
            )}
          </Form.Item>

          <LinkButton>Download List Template?</LinkButton>

          <PrimaryButton
            htmlType="submit"
            disabled={!submittable}
            className={`${!submittable && styles.disabled} mt-5`}
          >
            Upload
          </PrimaryButton>
        </Form>
      </div>
    </div>
  );
};
