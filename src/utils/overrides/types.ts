import { ComponentType } from 'react';

export type ComponentOverrides<
  Components extends Record<string, ComponentType<any>>,
  Overrides extends Partial<Record<keyof Components, unknown>> = Components,
> = {
  [Key in keyof Components]?:
    | Components[Key]
    | (unknown extends Overrides[Key] ? undefined : Overrides[Key]);
};

export type OverridesProp<Overrides> = {
  overrides?: Overrides;
};
