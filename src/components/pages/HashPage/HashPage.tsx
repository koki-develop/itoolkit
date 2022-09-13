import crypto from "crypto";
import { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";
import Input from "@/components/util/Input";
import Page from "@/components/util/Page";
import TextArea from "@/components/util/TextArea";

const HashPage: NextPage = () => {
  const [text, setText] = useState<string>("");
  const [md5, setMd5] = useState<string>("");
  const [rmd160, setRmd160] = useState<string>("");
  const [sha1, setSha1] = useState<string>("");
  const [sha256, setSha256] = useState<string>("");
  const [sha384, setSha384] = useState<string>("");
  const [sha512, setSha512] = useState<string>("");

  const handleChangeText = useCallback((value: string) => {
    setText(value);
  }, []);

  useEffect(() => {
    setMd5(crypto.createHash("md5").update(text).digest("hex"));
    setRmd160(crypto.createHash("rmd160").update(text).digest("hex"));
    setSha1(crypto.createHash("sha1").update(text).digest("hex"));
    setSha256(crypto.createHash("sha256").update(text).digest("hex"));
    setSha384(crypto.createHash("sha384").update(text).digest("hex"));
    setSha512(crypto.createHash("sha512").update(text).digest("hex"));
  }, [text]);

  return (
    <Page title="Hash">
      <TextArea
        title="Text"
        error={null}
        value={text}
        onChange={handleChangeText}
        textareaProps={{
          className: "mb-2",
          rows: 5,
        }}
      />

      <div className="mb-2">
        <Input
          title="MD5"
          inputProps={{
            disabled: true,
            type: "text",
            value: md5,
          }}
        />
      </div>

      <div className="mb-2">
        <Input
          title="RMD160"
          inputProps={{
            disabled: true,
            type: "text",
            value: rmd160,
          }}
        />
      </div>

      <div className="mb-2">
        <Input
          title="SHA1"
          inputProps={{
            disabled: true,
            type: "text",
            value: sha1,
          }}
        />
      </div>

      <div className="mb-2">
        <Input
          title="SHA256"
          inputProps={{
            disabled: true,
            type: "text",
            value: sha256,
          }}
        />
      </div>

      <div className="mb-2">
        <Input
          title="SHA384"
          inputProps={{
            disabled: true,
            type: "text",
            value: sha384,
          }}
        />
      </div>

      <div className="mb-2">
        <Input
          title="SHA512"
          inputProps={{
            disabled: true,
            type: "text",
            value: sha512,
          }}
        />
      </div>
    </Page>
  );
};

export default HashPage;
