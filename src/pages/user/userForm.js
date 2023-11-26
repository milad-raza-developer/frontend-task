import React, { useState, useRef } from "react";
import {
  Layout,
  ThemeButton,
  ThemeInput,
  ThemeSelect,
  Uploader,
} from "../../components/components";
import { Form, Row, Col, Switch, Radio, message, Spin } from "antd";
import { usersCollection, addDoc } from "../../utils/firebase";
import { uploadImage } from "../../helpers/helpers";

const UserForm = () => {
  const [isRole, setIsRole] = useState(false);
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];

  const formRef = useRef();

  const onFinish = async (values) => {
    if (!errorMessage) {
      setIsLoading(true);
      try {
        const url = imageFile ? await uploadImage(imageFile) : "";
        const userData = {
          profile: url,
          username: values.username,
          email: values.email,
          phoneNumber: values.phoneNumber,
          interviewTime: values.interviewTime || "Morning",
          role: isRole ? values.role : null,
          active: false
        };

        const docRef = await addDoc(usersCollection, userData);
        formRef.current.resetFields();
        setImage("");
        setImageFile("");
        setIsRole(false);
        setIsLoading(false);
        message.success("User added successfully");
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        setIsLoading(false);
        console.error("Error adding document: ", error.message);
        message.error(error.message || "Something went wrong!");
      }
    }
  };

  const onHandleImage = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setUploading(true);
      if (allowedFormats.includes(selectedImage.type)) {
        setImage(URL.createObjectURL(selectedImage));
        setImageFile(selectedImage);
        setErrorMessage("");
        setUploading(false);
      } else {
        setImage("");
        setImageFile("");
        setErrorMessage(
          "Invalid file format. Please select a JPEG, PNG or JPG image."
        );
        setUploading(false);
      }
    }
  };

  return (
    <Layout selected={"1"}>
      <div className="bg-white rounded-md w-full h-full p-6">
        <h1 className="text-secondary text-2xl font-medium mb-6">User Form</h1>

        <Form
          name="userForm"
          initialValues={{ interviewTime: "Morning" }}
          onFinish={onFinish}
          ref={formRef}
        >
          <Uploader
            label={"Upload profile picture"}
            placeholder={"PNG, JPEG, JPG"}
            image={image}
            handleImage={(e) => onHandleImage(e)}
            uploading={uploading}
            errorMessage={errorMessage}
            textMd
          />
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
                  { required: true, message: "Please select interview time!" },
                ]}
              >
                <ThemeSelect
                  label={"Interview preferred time"}
                  textMd
                  defaultValue={"Morning"}
                  options={[
                    { label: "Morning", value: "Morning" },
                    { label: "Afternoon", value: "Afternoon" },
                    { label: "Evening", value: "Evening" },
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
            <ThemeButton
              htmlType="submit"
              className={"!rounded-none w-28 !h-10"}
              content={
                isLoading ? (
                  <Spin className="white-loader" />
                ) : (
                  <p className="text-white !text-xs !font-medium">ADD USER</p>
                )
              }
            />
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};

export default UserForm;
