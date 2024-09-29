import React, { useState, useEffect } from "react";
import cx from "classnames";
import { AvatarUploadStyled } from "./styled";
import { useDropzone } from "react-dropzone";

const AvatarUpload = ({
  theme_upload_image,
  heightBox,
  acceptType,
  value,
  onChange,
  onChangeCustom,
  maxMBFileSizeWarning,
  width,
  name,
  fieldName,
  errors,
  label,
}) => {
  const customClass = cx({
    theme_upload_image: theme_upload_image,
  });
  const [files, setFiles] = useState([]);
  const [labelShow, setLabelShow] = useState("No file chosen");

  const renderAcceptType = (type) => {
    switch (type) {
      case "cover":
        return {
          "image/jpeg": [".jpeg", ".png"],
        };
      case "png":
        return {
          "image/png": [".png"],
        };
      case "audio":
        return ".mp3,audio/mpeg3";
      case "video":
        return { "video/": [] };
      case "csv":
        return { "text/csv": [".csv"] };
      case "json":
        return { "application/JSON": [".json"] };
      default:
        break;
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { ...renderAcceptType(acceptType) },
    onDrop: async (acceptedFiles) => {
      if (acceptType !== "csv") {
        if (maxMBFileSizeWarning) {
          let checkFileLimit = acceptedFiles.filter(
            (e) =>
              Number((e.size / 1024 / 1024).toFixed(2)) >
              Number(maxMBFileSizeWarning)
          );
          if (checkFileLimit && checkFileLimit.length > 0) {
            alert("ไฟล์มีขนาดใหญ่ ผู้ใช้อาจต้องใช้เวลานานในการแสดงผล");
          }
        }
        // const imageResize = await resizeFile(acceptedFiles);
        let fileTemp = [
          ...files.filter((e) => !e.isNewUpload),
          ...acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
              isNewUpload: true,
              fieldName: fieldName || name,
            })
          ),
        ];
        setLabelShow(acceptedFiles[acceptedFiles.length - 1].name);
        setFiles(fileTemp);
        onChange && onChange(fileTemp);
        onChangeCustom && onChangeCustom(fileTemp);
      } else {
        let fileTemp = [
          ...files,
          ...acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
              isNewUpload: true,
              fieldName: fieldName || name,
            })
          ),
        ];
        setLabelShow(acceptedFiles[acceptedFiles.length - 1].name);
        setFiles(fileTemp);
        onChange && onChange(fileTemp);
        onChangeCustom && onChangeCustom(fileTemp);
      }
    },
  });

  useEffect(() => {
    if (
      value &&
      value.length === 1 &&
      value[0].media_uri &&
      !value[0].isDelete
    ) {
      let splitName = value[0].media_uri.split("/");
      setLabelShow(splitName[splitName.length - 1]);
      setFiles(value);
    }
    if (value === false) {
      setLabelShow("No file chosen");
      setFiles([]);
    }
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  const onClickRemove = (index, data) => {
    if (data[0].isNewUpload) {
      let filesTemp = files;
      filesTemp.splice(0, 1);
      setFiles([...filesTemp]);
      onChange && onChange([...filesTemp]);
      onChangeCustom && onChangeCustom([...filesTemp]);
    } else {
      let filesTemp = files;
      filesTemp[0].isDelete = true;
      filesTemp[0].fieldName = fieldName || name;
      let filter = [...filesTemp.filter((e) => !e.isNewUpload)];
      setFiles(filter);
      onChange && onChange(filter);
      onChangeCustom && onChangeCustom(filter);
    }
    setLabelShow("No file chosen");
  };

  return (
    <AvatarUploadStyled heightBox={heightBox} width={width}>
      <div className={customClass}>
        {label && <div className="label">{label}</div>}
        <div className="upload_container">
          <div className="avatar_upload_row">
            <input {...getInputProps()} />
            <div className="avt_left_col">
              <img
                className="avatar_img"
                alt="avatar"
                src={
                  files && files.length > 0
                    ? files[0].preview
                    : "/assets/images/icons/avatar-img.png"
                }
              />
            </div>
            <div className="avt_right_col">
              <div {...getRootProps({ className: "cc" })}>
                <input {...getInputProps()} />
                <button type="button" className="btn_upload">
                  Upload photo
                </button>
              </div>
              <div className="avt_desc">Only png, jpg files</div>
            </div>
          </div>
        </div>
      </div>
      {errors && <div className="errors">{errors}</div>}
    </AvatarUploadStyled>
  );
};

AvatarUpload.propTypes = {};

export default AvatarUpload;
