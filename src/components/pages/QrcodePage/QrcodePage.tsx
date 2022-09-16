import { NextPage } from "next";
import Image from "next/image";
import qrcode from "qrcode";
import React, { useCallback, useState } from "react";
import Page from "@/components/util/Page";
import TextArea from "@/components/util/TextArea";

const QrcodePage: NextPage = () => {
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [qrcodeSrc, setQrcodeSrc] = useState<string | null>(null);

  const handleChangeText = useCallback((value: string) => {
    setText(value);

    if (value == "") {
      setQrcodeSrc(null);
      setError(null);
    } else {
      qrcode
        .toDataURL(value)
        .then(src => {
          setQrcodeSrc(src);
          setError(null);
        })
        .catch(err => setError(err.message));
    }
  }, []);

  return (
    <Page title="QR Code">
      <TextArea
        title="Text"
        error={error}
        value={text}
        onChange={handleChangeText}
        textareaProps={{
          className: "mb-8",
          rows: 5,
        }}
      />

      {qrcodeSrc && (
        <div className="flex justify-center">
          <Image
            className="max-w-full"
            width={300}
            height={300}
            src={qrcodeSrc}
            alt="QR Code"
          />
        </div>
      )}
    </Page>
  );
};

export default QrcodePage;
