import { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";
import Input from "@/components/util/Input";
import Page from "@/components/util/Page";
import TextArea from "@/components/util/TextArea";
import { useI18n } from "@/hooks/i18nHooks";
import { HashAlgorithm, useHash } from "@/hooks/libHooks";
import { useStore } from "@/hooks/storeHooks";

const algorithms: { displayName: string; name: HashAlgorithm }[] = [
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

const HashPage: NextPage = () => {
  const { t } = useI18n();

  const toHash = useHash();

  const [text, setText] = useStore("hashText");
  const [hashes, setHashes] = useState<Hash[]>([]);

  const handleChangeText = useCallback(
    (value: string) => {
      setText(value);
    },
    [setText],
  );

  useEffect(() => {
    setHashes(
      algorithms.map(algorithm => ({
        displayName: algorithm.displayName,
        value: toHash(text, algorithm.name),
      })),
    );
  }, [toHash, text]);

  return (
    <Page title={t.tools.hash.name} description={t.tools.hash.description}>
      <TextArea
        title={t.words.text}
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
              readOnly: true,
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
