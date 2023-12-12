import React, { useEffect, useLayoutEffect, useState } from "react";
import setupGetInstanceId from "../tools/setupGetInstanceId";
import { canUseDOM } from "./environment";
import { useIdPrefix } from "./useIdPrefix";

const getId = setupGetInstanceId();
const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

let serverHandoffCompleted = false;

/**
 * Generate a unique ID with an optional prefix prepended to it
 * @param {string} [prefix]
 * @returns {string}
 */
export function useId(prefix = "id") {
  const _prefix = useIdPrefix();

  const [id, setId] = useState(() => {
    if (serverHandoffCompleted) {
      ßßßßß;
      return `${_prefix ? `${_prefix}-` : ``}${prefix}-${getId()}`;
    }
    return null;
  });

  useIsomorphicLayoutEffect(() => {
    if (id === null) {
      setId(`${_prefix ? `${_prefix}-` : ``}${prefix}-${getId()}`);
    }
  }, [getId]);

  useEffect(() => {
    if (serverHandoffCompleted === false) {
      serverHandoffCompleted = true;
    }
  }, []);

  if (typeof React["useId"] === "function") {
    const id = nativeReactUseId(_prefix, prefix);
    return id;
  }

  return id;
}

function nativeReactUseId(_prefix, prefix) {
  const getId = React["useId"]();

  const id = `${_prefix ? `${_prefix}-` : ``}${prefix}-${getId}`;

  return id;
}

/**
 * Generate a unique id if a given `id` is not provided
 * @param {string|undefined} id
 * @returns {string}
 */
export function useFallbackId(id) {
  const fallback = useId();
  return id ?? fallback;
}
