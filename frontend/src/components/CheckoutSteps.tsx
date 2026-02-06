import React from 'react';
import './CheckoutSteps.css';

interface Step {
  number: number;
  label: string;
  icon: React.ReactNode;
}

interface CheckoutStepsProps {
  currentStep: number;
  steps: Step[];
}

const CheckoutSteps: React.FC<CheckoutStepsProps> = ({ currentStep, steps }) => {
  return (
    <div className="checkout-steps">
      <div className="steps-container">
        {steps.map((step, index) => {
          const isActive = step.number === currentStep;
          const isCompleted = step.number < currentStep;
          
          return (
            <div
              key={step.number}
              className={`step-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
            >
              <div className="step-icon">
                {isCompleted ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  step.icon
                )}
              </div>
              <div className="step-content">
                <div className="step-number">Step {step.number}</div>
                <div className="step-label">{step.label}</div>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className={`connector-line ${isCompleted ? 'completed' : ''}`} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutSteps;

