import { FC } from "react";
import { Controller } from "react-hook-form";
import { ComponentType } from "react";
import {Control} from "react-hook-form";
import {IRegistrationFormValues} from "@features/registration/types";

export interface IWithControllerProps {
  control: Control<IRegistrationFormValues, any>;
  name: keyof IRegistrationFormValues;
}

type TInternalProps = "errorMessage" | "value" | "onChange" | "error";

export function WithController<P extends object>(Component: ComponentType<P>
): FC<IWithControllerProps & Omit<P, TInternalProps>> {

  return ({control, name, ...rest }) => {
    return(
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) =>
          <Component
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChange={field.onChange}
            error={fieldState.invalid}
            {...(rest as P)}
          />
        }
      />
    )
  }
}
