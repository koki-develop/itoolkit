import crypto from "crypto";
import { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";
import Input from "@/components/util/Input";
import Page from "@/components/util/Page";
import TextArea from "@/components/util/TextArea";

const algorithms = [
  { displayName: "MD5", name: "md5" },
  { displayName: "RMD160", name: "rmd160" },
  { displayName: "SHA1", name: "sha1" },
  { displayName: "SHA256", name: "sha256" },
  { displayName: "SHA384", name: "sha384" },
  { displayName: "SHA512", name: "sha512" },
];

type Hash = {
  displayName: string;
  value: string;
};

const toHash = (text: string, algorithm: string): string =>
  crypto.createHash(algorithm).update(text).digest("hex");

const HashPage: NextPage = () => {
  const [text, setText] = useState<string>("");
  const [hashes, setHashes] = useState<Hash[]>([]);

  const handleChangeText = useCallback((value: string) => {
    setText(value);
  }, []);

  useEffect(() => {
    setHashes(
      algorithms.map(algorithm => ({
        displayName: algorithm.displayName,
        value: toHash(text, algorithm.name),
      })),
    );
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

      {hashes.map(hash => (
        <div key={hash.displayName} className="mb-2">
          <Input
            className="text-sm"
            title={hash.displayName}
            inputProps={{
              disabled: true,
              type: "text",
              value: hash.value,
            }}
          />
        </div>
      ))}
    </Page>
  );
};

export default HashPage;
