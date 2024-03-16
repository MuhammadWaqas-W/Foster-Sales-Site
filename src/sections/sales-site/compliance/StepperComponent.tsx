import { Step, StepIconProps, StepLabel, Stepper, useTheme } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";

// Wrapper component that accepts StepIconProps
const CustomStepIcon = (props: StepIconProps) => {
  const { active, completed, error } = props;

  // You can customize the icon's appearance based on StepIconProps
  // For simplicity, we're not altering the appearance in this example.
  return <CircleIcon />;
};

const StepperComponent = ({ mappingData, activeStep, height }: any) => {
  const theme: any = useTheme();
  return (
    <>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        sx={{
          " .MuiStepLabel-label.Mui-completed": {
            color: theme.palette.grey[600],
            fontSize: "18px",
            fontWeight: 400,
          },
          ".MuiStepConnector-root": {
            top: 0,
            marginLeft: "8px",
          },
          ".MuiStepConnector-line": {
            height: height,
          },
          ".MuiStepConnector-root span::before": {
            display: "flex",
            justifyContent: "center",
            content: '""',
          },
          ".MuiSvgIcon-root": {
            color: "#0E918C",
            padding: "3px",
            borderRadius: "50%",
            border: "1px solid #0E918C",
            marginY: "-3px",
            width: "16px",
            height: "16px",
          },
          ".MuiSvgIcon-root.Mui-active": {
            color: "#0E918C",
            padding: "3px",
            borderRadius: "50%",
            border: "1px solid #0E918C",
            marginY: "-3px",
          },
          p: { xs: 2, sm: 0 },
        }}
      >
        {mappingData.map((step: any, index: any) => (
          <Step
            key={step.title}
            sx={{
              whiteSpace: "pre-line",
            }}
          >
            <StepLabel StepIconComponent={CustomStepIcon} sx={{ color: "red" }}>
              {step.title}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default StepperComponent;
