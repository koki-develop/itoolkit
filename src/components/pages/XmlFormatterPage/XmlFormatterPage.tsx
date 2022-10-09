import { NextPage } from "next";
import React from "react";
import FormatterPage from "@/components/util/FormatterPage";
import { useI18n } from "@/hooks/i18nHooks";
import { useFormat } from "@/hooks/libHooks";

const XmlFormatterPage: NextPage = () => {
  const { t } = useI18n();

  const { formatXml } = useFormat();

  return (
    <FormatterPage
      title={t.tools.xmlFormatter.name}
      description={t.tools.xmlFormatter.description}
      left={{
        atomKey: "unformattedXml",
        title: t.words.xml,
        placeholder:
          '<?xml version="1.0" encoding="UTF-8"?><root><tool><title>XML Formatter</title></tool></root>',
      }}
      right={{
        atomKey: "formattedXml",
        title: t.words.formattedXml,
        placeholder: `<?xml version="1.0" encoding="UTF-8"?>
<root>
    <tool>
        <title>
            XML Formatter
        </title>
    </tool>
</root>`,
      }}
      syntax="xml"
      format={formatXml}
    />
  );
};

export default XmlFormatterPage;
