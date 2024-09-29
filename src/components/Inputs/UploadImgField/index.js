import React, { useState, useEffect } from "react";
import cx from "classnames";
import { UploadImgFieldStyled } from "./styled";
import { useDropzone } from "react-dropzone";

const UploadImgField = ({
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
    <UploadImgFieldStyled heightBox={heightBox} width={width}>
      <div className={customClass}>
        {label && <div className="label">{label}</div>}
        <div className="upload_container">
          <div {...getRootProps({ className: "input_upload" })}>
            <input {...getInputProps()} />
            {/* <Icons.Upload /> */}
            Upload slip
          </div>
          {files && files.length > 0 && (
            <div className="preview_img_figture">
              <img
                className="priview_img"
                src={files[0].preview}
                alt="preview"
              />
              <div
                className="remove_icon_wrap"
                onClick={() => onClickRemove(0, files)}
              >
                {/* <Icons.ClosePage color="red" /> */}
              </div>
            </div>
          )}
        </div>
      </div>
      {errors && <div className="errors">{errors}</div>}
    </UploadImgFieldStyled>
  );
};

UploadImgField.propTypes = {};

export default UploadImgField;
