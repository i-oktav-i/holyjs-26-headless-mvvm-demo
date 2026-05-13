import { ComponentType } from 'react';

type AnyComponent = ComponentType<any>;

type Result<
  Components extends Record<string, AnyComponent>,
  Overrides extends Partial<Record<keyof Components, unknown>>,
> = {
  components: Components;
  overrides: {
    [Key in keyof Overrides]: Exclude<Overrides[Key], (...args: any[]) => any>;
  };
};

export const defineOverrides = <
  Components extends Record<string, AnyComponent>,
  Overrides extends Partial<Record<keyof Components, unknown>>,
>(
  components: Components,
  overrides?: Overrides,
): Result<Components, Overrides> => {
  const result = {
    overrides: {},
    components: { ...components },
  } as Result<Components, Overrides>;

  if (!overrides) return result;

  Object.keys(overrides).forEach((key) => {
    const item = overrides[key];
    if (typeof item === 'function') {
      // @ts-ignore
      result.components[key] = item;
    } else {
      // @ts-ignore
      result.overrides[key] = item;
    }
  });

  return result;
};
