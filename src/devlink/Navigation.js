"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Navigation.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ef971416-f16a-30d1-9855-e6f28d67a8d6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ef971416-f16a-30d1-9855-e6f28d67a8d6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1635931493769},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ef971416-f16a-30d1-9855-e6f28d67a8d6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ef971416-f16a-30d1-9855-e6f28d67a8d6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1635931493770},"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"684df982813ffc6a40077f0a|f76a88df-5b2d-ed3d-3123-e8df692a68c6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"684df982813ffc6a40077f0a|f76a88df-5b2d-ed3d-3123-e8df692a68c6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1657613278428},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"684df982813ffc6a40077f0a|f76a88df-5b2d-ed3d-3123-e8df692a68c6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"684df982813ffc6a40077f0a|f76a88df-5b2d-ed3d-3123-e8df692a68c6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1657613278428},"e-5":{"id":"e-5","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6851d3071cbdedda4fdc234f|f76a88df-5b2d-ed3d-3123-e8df692a68c6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6851d3071cbdedda4fdc234f|f76a88df-5b2d-ed3d-3123-e8df692a68c6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750192903817},"e-6":{"id":"e-6","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6851d3071cbdedda4fdc234f|f76a88df-5b2d-ed3d-3123-e8df692a68c6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6851d3071cbdedda4fdc234f|f76a88df-5b2d-ed3d-3123-e8df692a68c6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750192903817}},"actionLists":{"a":{"id":"a","title":"Open Nav","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".nav-lines.nav-line-2","selectorGuids":["8dacc60f-78a7-0d1c-5f37-8713f0f7653d","968ebafa-24f7-88db-d7aa-ba5572a784c4"]},"value":0,"unit":""}},{"id":"a-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-lines.nav-line-1","selectorGuids":["8dacc60f-78a7-0d1c-5f37-8713f0f7653d","72f12bea-fd61-fed4-c2e5-dcecd218d4d9"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-lines.nav-line-1","selectorGuids":["8dacc60f-78a7-0d1c-5f37-8713f0f7653d","72f12bea-fd61-fed4-c2e5-dcecd218d4d9"]},"yValue":6,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-lines.nav-line-3","selectorGuids":["8dacc60f-78a7-0d1c-5f37-8713f0f7653d","c6cfcf93-3716-c7e4-0247-7ea29f345e7f"]},"yValue":-6,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-lines.nav-line-3","selectorGuids":["8dacc60f-78a7-0d1c-5f37-8713f0f7653d","c6cfcf93-3716-c7e4-0247-7ea29f345e7f"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1635931496114},"a-2":{"id":"a-2","title":"Close Nav","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".nav-lines.nav-line-2","selectorGuids":["8dacc60f-78a7-0d1c-5f37-8713f0f7653d","968ebafa-24f7-88db-d7aa-ba5572a784c4"]},"value":1,"unit":""}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-lines.nav-line-1","selectorGuids":["8dacc60f-78a7-0d1c-5f37-8713f0f7653d","72f12bea-fd61-fed4-c2e5-dcecd218d4d9"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-lines.nav-line-1","selectorGuids":["8dacc60f-78a7-0d1c-5f37-8713f0f7653d","72f12bea-fd61-fed4-c2e5-dcecd218d4d9"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-lines.nav-line-3","selectorGuids":["8dacc60f-78a7-0d1c-5f37-8713f0f7653d","c6cfcf93-3716-c7e4-0247-7ea29f345e7f"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-lines.nav-line-3","selectorGuids":["8dacc60f-78a7-0d1c-5f37-8713f0f7653d","c6cfcf93-3716-c7e4-0247-7ea29f345e7f"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1635931496114}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navigation({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navigation")}
      data-w-id="ef971416-f16a-30d1-9855-e6f28d67a8d6"
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.Block className={_utils.cx(_styles, "nav-container")} tag="div">
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "nav-brand")}
          options={{
            href: "https://s",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "nav-logo")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/684df981813ffc6a40077ec8/684df982813ffc6a40077f40_flow.ninja.logo.svg"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "nav-menu")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-menu-mask")}
            tag="div"
          >
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "nav-link")}
              options={{
                href: "https://www.flow.ninja/",
                target: "_blank",
              }}
            >
              {"About Flow Ninja"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "nav-link")}
              options={{
                href: "https://www.flow.ninja/webflow-guides/flow-starter-overview",
                target: "_blank",
              }}
            >
              {"Read the docs"}
            </_Builtin.NavbarLink>
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "nav-menu-button")}
          tag="div"
          scroll="both"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-menu-button-wrap")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-lines", "nav-line-1")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-lines", "nav-line-2")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-lines", "nav-line-3")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.NavbarButton>
      </_Builtin.Block>
    </_Component>
  );
}
