import PropTypes from "prop-types";
import React, { useCallback, useEffect } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {
  BsFiletypeDocx,
  BsFiletypePptx,
  BsFiletypeTxt,
  BsFiletypeXlsx,
} from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import classes from "./upload.module.css";

const MultiFileUploader = ({
  files,
  setDeletedFiles,
  setFiles,
  type = "image",
}) => {
  const [innerFiles, setInnerFiles] = React.useState([]);

  const handleFileChange = useCallback(
    (event) => {
      const selectedFiles = event.target.files;
      if (selectedFiles && selectedFiles.length > 0) {
        const newFiles = Array.from(selectedFiles);
        setInnerFiles((prevFiles) => [...prevFiles, ...newFiles]);
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      }
    },
    [setFiles]
  );

  const handleDrop = useCallback(
    (event) => {
      event.preventDefault();
      const droppedFiles = event.dataTransfer.files;
      if (droppedFiles.length > 0) {
        const newFiles = Array.from(droppedFiles);
        setInnerFiles((prevFiles) => [...prevFiles, ...newFiles]);
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      }
    },
    [setFiles]
  );

  const handleRemoveFile = useCallback(
    (index) => {
      if (
        typeof innerFiles[index] !== "object" &&
        typeof innerFiles[index] !== "file"
      ) {
        setDeletedFiles((prevFiles) => [...prevFiles, innerFiles[index]]);
      }
      setInnerFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
      setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    },
    [innerFiles, setDeletedFiles, setFiles]
  );

  useEffect(() => {
    if (Array.isArray(files)) {
      setInnerFiles([...files]);
    }
  }, [files]);

  return (
    <>
      <div className={classes.dragDiv}>
        <label>{type === "image" ? "Images" : "Documents"}</label>
        <div
          className={classes.dragDivInner}
          onDrop={handleDrop}
          onDragOver={(event) => event.preventDefault()}
        >
          {innerFiles?.length > 0 ? (
            <div className={classes.files}>
              {innerFiles?.map((file, index) => (
                <div className={classes.file} key={index}>
                  <ViewFileImage file={file} />
                  <div className={classes.clear}>
                    <MdClear onClick={() => handleRemoveFile(index)} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={classes.document_uploader}>
              <div className={classes.upload_info}>
                <AiOutlineCloudUpload />
                <div>
                  <p>Drag and drop your files here</p>
                  <p>
                    Limit 15MB per file. Supported formats:{" "}
                    {type === "image"
                      ? "PNG, JPG, JPEG"
                      : "PDF, DOCX, PPTX, TXT, XLSX"}
                  </p>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    hidden
                    id="browse"
                    onChange={handleFileChange}
                    accept={
                      type === "image"
                        ? ".png, .jpg, .jpeg"
                        : ".pdf,.docx,.pptx,.txt,.xlsx"
                    }
                    multiple
                  />
                  <label
                    style={{
                      opacity: 0,
                      top: 0,
                      left: 0,
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                    }}
                    htmlFor="browse"
                    className={classes.browse_btn}
                  >
                    Browse files
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const ViewFileImage = ({ file }) => {
  const fileTypes = [".pdf", ".docx", ".pptx", ".txt", ".xlsx"];
  const imageTypes = [".png", ".jpg", ".jpeg"];
  const fileLogo = {
    pdf: <FaFilePdf />,
    docx: <BsFiletypeDocx />,
    pptx: <BsFiletypePptx />,
    txt: <BsFiletypeTxt />,
    xlsx: <BsFiletypeXlsx />,
  };

  const type = `.${file.name.split(".").pop().toLowerCase()}`;

  if (fileTypes.includes(type)) {
    return fileLogo[type.slice(1)];
  }
  if (imageTypes.includes(type)) {
    return (
      <img
        src={typeof file === "string" ? file : URL.createObjectURL(file)}
        alt="file preview"
      />
    );
  }

  return null;
};

MultiFileUploader.propTypes = {
  files: PropTypes.array.isRequired,
  setDeletedFiles: PropTypes.func.isRequired,
  setFiles: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["image", "file"]),
};

ViewFileImage.propTypes = {
  file: PropTypes.instanceOf(File).isRequired,
};

export default MultiFileUploader;
