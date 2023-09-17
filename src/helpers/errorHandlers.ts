import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { IErrorWithTitle } from "@customTypes/errorTypes";

export function isFetchBaseQueryError(
  error: unknown
): error is FetchBaseQueryError {
  return typeof error === "object" && error != null && "status" in error;
}

export function isErrorWithMessage(
  error: unknown
): error is { message: string } {
  return (
    typeof error === "object" &&
    error != null &&
    "message" in error &&
    typeof (error as any).message === "string"
  );
}

export function getErrorMessage(error: unknown) {
  if (isFetchBaseQueryError(error)) {
    return JSON.stringify(error.data);
  } else if (isErrorWithMessage(error)) {
    return error.message;
  }
}

export function getErrorTitle(error: unknown) {
  return (error as IErrorWithTitle).data.title;
}
