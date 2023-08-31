import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { ComponentType } from "react";

export interface IWithControllerProps {
  control: Control<any>;
  name: string;
}

export type TInternalProps = "errorMessage" | "value" | "onChange" | "error";

export function WithController<P extends object>(
  Component: ComponentType<P>
): FC<IWithControllerProps & Omit<P, TInternalProps>> {
  return ({ control, name, ...rest }) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <Component
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChange={field.onChange}
            error={fieldState.invalid}
            {...(rest as P)}
          />
        )}
      />
    );
  };
}
