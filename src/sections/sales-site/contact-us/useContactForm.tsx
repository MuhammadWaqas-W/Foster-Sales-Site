import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { defaultValues, formSchema } from "./index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const useContactForm = () => {
  const router = useRouter();
  const theme: any = useTheme();
  const { fosterCarerId } = router.query;
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const {
    setValue,
    trigger,
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = methods;

  //OnSubmit Function
  const onSubmit = async (data: any) => {
    console.log("data", data);
  };
  return {
    router,
    onSubmit,
    isLoading,
    theme,
    handleSubmit,
    methods,
    getValues,
    setValue,
    trigger,
    isFetching,
    isSubmitting,
    fosterCarerId,
  };
};
