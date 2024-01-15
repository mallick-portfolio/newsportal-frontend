"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";
Quill.register("modules/imageResize", ImageResize);
const NewsPage = () => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  // Editor ref
  const [value, setValue] = useState("");
  const textEditorRef = useRef();

  useEffect(() => {
    const quillEditorContext = textEditorRef.current;
    if (!quillEditorContext) return;
    const quill = quillEditorContext.getEditor();
    const imageResize = quill.getModule("imageResize");
    const quillRoot = quill.root;
    const hideOverlay = async (event) => {
      if (!quillRoot.contains(event.target)) {
        imageResize.hide();
      }
    };
    document.getElementById("__next").addEventListener("click", hideOverlay);
    return () => {
      document
        .getElementById("__next")
        .removeEventListener("click", hideOverlay);
    };
  }, [value]);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote"],
          // [{ color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
      },
      clipboard: {
        matchVisual: true,
      },
      imageResize: {
        parchment: Quill.import("parchment"),
        modules: ["Resize", "DisplaySize"],
      },
    }),
    []
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <div className="pr-6 ">
      <div className="mt-4">
        <ReactQuill
          // className={styles.editor}
          theme={"snow"}
          onChange={(e) => setValue(e)}
          value={value}
          modules={modules}
          formats={formats}
          bounds={"#root"}
          // placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default NewsPage;
