"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer-section")}
      grid={{
        type: "section",
      }}
      tag="footer"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "grid")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "column")}
          id={_utils.cx(
            _styles,
            "w-node-_73c87ccf-69c8-d53d-9241-241543a429d2-654d2164"
          )}
          tag="div"
        >
          <_Builtin.NavbarBrand
            className={_utils.cx(_styles, "footer-brand")}
            options={{
              href: "/",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "footer-logo")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/684df981813ffc6a40077ec8/684df982813ffc6a40077f41_flow.ninja.styleguide.svg"
            />
          </_Builtin.NavbarBrand>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-made-with")}
          id={_utils.cx(
            _styles,
            "w-node-_2a616156-a789-3c89-957b-096767c03146-654d2164"
          )}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "footer-link")}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Privacy Policy"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "footer-link")}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Terms of Service"}
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-copyright")}
            id={_utils.cx(
              _styles,
              "w-node-_0f2189c3-cd67-8bae-1b70-bf24a1e4cd11-654d2164"
            )}
            tag="div"
          >
            {"Copyright @ "}
            <_Builtin.Span
              className={_utils.cx(_styles, "copyright-year")}
              id="copyright"
            >
              {"2021"}
            </_Builtin.Span>{" "}
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link")}
              button={false}
              block=""
              options={{
                href: "#",
                target: "_blank",
              }}
            >
              {"Flow Ninja doo"}
            </_Builtin.Link>{" "}
            <_Builtin.Span className={_utils.cx(_styles, "mobile-brake")}>
              {"All rights reserved."}
            </_Builtin.Span>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
