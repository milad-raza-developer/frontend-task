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
  placeholder,
  errorMessage,
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
      <label htmlFor="uploader">
        {image ? (
          <>
            {uploading ? (
              <div className="flex items-center justify-center w-24 h-24 rounded-full border-2 border-primary">
                <Spin />
              </div>
            ) : (
              <div>
                <img
                  src={image}
                  alt=""
                  className="w-24 h-24 rounded-full object-cover border-2 border-primary cursor-pointer"
                />
                <input
                  type="file"
                  onChange={(e) => handleImage(e)}
                  id={"uploader"}
                  className="!hidden"
                  accept=".png, .jpg, .jpeg"
                />
              </div>
            )}
          </>
        ) : (
          <>
            {uploading ? (
              <div className="flex justify-center">
                <Spin />
              </div>
            ) : (
              <div
                className={`!border !border-dashed !rounded-md h-24 md:!w-48 !w-full !bg-[#FDFDFD] ${
                  errorMessage ? "border-red-600" : "border-[#cccccc]"
                } flex justify-center items-center`}
              >
                <div className="w-24 !bg-[#E4E4E4] rounded h-8 flex items-center justify-center">
                  <div className="flex items-center text-black text-xs">
                    <PlusOutlined className="text-[10px]" />
                    <p className="ml-1">Browse</p>
                  </div>
                </div>
                <input
                  type="file"
                  onChange={(e) => handleImage(e)}
                  id={"uploader"}
                  className="!hidden"
                  accept=".png, .jpg, .jpeg"
                />
              </div>
            )}
          </>
        )}
      </label>
      <p className="text-xs text-labelColor mt-2">{placeholder}</p>
      <p className="text-red-600 mt-1 text-xs">{errorMessage}</p>
    </div>
  );
};

export default Uploader;
