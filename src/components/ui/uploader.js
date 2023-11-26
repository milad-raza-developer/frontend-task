import React from "react";
import { Upload, Spin } from "antd";
import { ThemeButton } from "../../components/components";
import { PlusOutlined } from "@ant-design/icons";
const { Dragger } = Upload;

const Uploader = ({
  label,
  labelPrimary,
  textMd,
  image,
  handleImage,
  uploading,
  placeholder
}) => {
  return (
    <div>
      <p
        className={`${labelPrimary && "text-primary"} ${
          textMd ? "font-medium" : "font-semibold"
        } mb-1 text-xs text-labelColor`}
      >
        {label}
      </p>
      {image ? (
        <img src={image} alt="" />
      ) : (
        <>
          {uploading ? (
            <div className="flex justify-center">
              <Spin />
            </div>
          ) : (
            <Dragger
              name="file"
              multiple={false}
              showUploadList={false}
              onChange={handleImage}
            >
              <div className="flex justify-center items-center">
                <ThemeButton
                  className="w-24 !bg-[#E4E4E4] rounded"
                  content={
                    <div className="flex items-center text-black text-xs">
                      <PlusOutlined className="text-[10px]" /> <p className="ml-1">Browse</p>
                    </div>
                  }
                />
              </div>
            </Dragger>
          )}
        </>
      )}
      <p className="text-xs text-labelColor -mt-4">{placeholder}</p>
    </div>
  );
};

export default Uploader;
