import React from "react"

const CONFIG = {
  clientKey: "0643615695f0a88d99a848b4d39d99e8",
}

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="cronitor-rum-src"
      async
      src="https://rum.cronitor.io/script.js"
    />,
    <script
      key="cronitor-rum-code"
      dangerouslySetInnerHTML={{
        __html: `
          window.cronitor = window.cronitor || function() { (window.cronitor.q = window.cronitor.q || []).push(arguments); };
          cronitor('config', ${JSON.stringify(CONFIG)});
        `,
      }}
    />,
  ])
}
