// @mui
import { Grid, IconButton, InputAdornment, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useSignupForm } from "./useSignupForm";

export default function SignupForm() {
  const {
    showPassword,
    methods,
    handleShowPassword,
    handleSubmit,
    handleConfirmShowPassword,
    onSubmit,
    isSubmitting,
    isValid,
    confirmPassword,
  } = useSignupForm();

  const passwordEndAdornment = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleShowPassword} edge="end">
          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </InputAdornment>
    ),
  };

  const confirmPasswordEndAdornment = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleConfirmShowPassword} edge="end">
          {confirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </InputAdornment>
    ),
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        spacing={{ xs: 3, lg: 2, xl: 3 }}
        sx={{ mt: 0, px: { xs: 0, lg: 2 } }}
      >
        <Grid item xs={12} sm={6}>
          <RHFTextField size="small" name="firstName" label="First Name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RHFTextField size="small" name="lastName" label="Last Name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RHFTextField
            size="small"
            name="bussinessName"
            label="Bussiness Name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RHFTextField
            size="small"
            name="agencyName"
            label="Agency Name (Optional)"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RHFTextField
            size="small"
            name="agencyPostCode"
            label="Agency Post Code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RHFTextField size="small" name="phoneNumber" label="Phone Number" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <RHFTextField
            size="small"
            name="bussinessEmail"
            label="Bussiness Email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RHFTextField
            size="small"
            name="registrationNumber"
            label="Company Registration Number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RHFTextField
            size="small"
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={passwordEndAdornment}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RHFTextField
            size="small"
            name="confirmPassword"
            label="Confirm Password"
            type={confirmPassword ? "text" : "password"}
            InputProps={confirmPasswordEndAdornment}
          />
        </Grid>
        <Grid item xs={12}>
          <LoadingButton
            fullWidth
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            sx={{ fontWeight: 500 }}
          >
            Sign Up
          </LoadingButton>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
