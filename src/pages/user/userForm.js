import React, { useState } from "react";
import { Layout, ThemeButton, ThemeInput, ThemeSelect, Uploader } from "../../components/components";
import { Form, Row, Col, Switch, Radio } from "antd";

const UserForm = () => {
  const [isRole, setIsRole] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

   return (
    <Layout selected={"1"}>
      <div className="bg-white rounded-md w-full h-full p-6">
        <h1 className="text-secondary text-2xl font-medium mb-6">User Form</h1>

        <Form
          name="userForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Uploader label={"Upload profile picture"} placeholder={"PNG, JPEG, JPG"} textMd/>
          <Row gutter={{ xs: 8, sm: 16, md: 30, lg: 30 }} className="mt-6">
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="">
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your user name!" },
                ]}
              >
                <ThemeInput
                  label={"User name"}
                  type={"text"}
                  textMd
                  placeholder={"Enter Username"}
                />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="">
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: `Please input your Email!`,
                  },
                ]}
              >
                <ThemeInput
                  label={"Email"}
                  type={"text"}
                  textMd
                  placeholder={"Enter Email"}
                />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="">
              <Form.Item
                name="phoneNumber"
                rules={[
                  { required: true, message: "Please input your number!" },
                ]}
              >
                <ThemeInput
                  label={"Enter your phone number"}
                  type={"text"}
                  textMd
                  placeholder={"Enter Phone Number"}
                />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="">
              <Form.Item
                name="interviewTime"
                rules={[
                  {
                    required: true,
                    message: `Please select time!`,
                  },
                ]}
              >
                <ThemeSelect
                  label={"Interview preferred time"}
                  textMd
                  defaultValue={"morning"}
                  options={[
                    { label: "Morning", value: "morning" },
                    { label: "Afternoon", value: "afternoon" },
                    { label: "Evening", value: "evening" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={24} className="mb-4">
              <Switch checked={isRole} onChange={(e) => setIsRole(e)} />{" "}
              <span className="ml-2 text-xs text-labelColor">
                Select Your Role (optional)
              </span>
            </Col>
            {isRole && (
              <Col span={24}>
                <Form.Item
                  name="role"
                  rules={[
                    {
                      required: true,
                      message: `Please select role!`,
                    },
                  ]}
                >
                  <Radio.Group>
                    <Radio value={"student"}>Student</Radio>
                    <Radio value={"teacher"}>Teacher</Radio>
                    <Radio value={"other"}>Other</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            )}
          </Row>
          <Form.Item className="flex justify-end mt-8 mb-0">
            <ThemeButton htmlType='submit' className={"!rounded-none w-28"} content={<p className="text-white !text-xs !font-medium">ADD USER</p>} />
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};

export default UserForm;
