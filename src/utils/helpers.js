export const formatAmount = (price) => {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  return formatter.format(price);
};

export const validateForm = (setErrors, formData, formFields) => {
  let isValid = true;
  const formErrors = {};

  if (formFields.description) {
    if (!formData.description.trim()) {
      formErrors.description = "Expense description is required.";
      isValid = false;
    } else if (formData.description.length < 3) {
      formErrors.description =
        "Expense description must be at least 3 characters.";
      isValid = false;
    } else if (formData.description.length > 100) {
      formErrors.description =
        "Expense description cannot be more than 100 characters long.";
      isValid = false;
    }
  }

  if (formFields.amount) {
    if (!formData.amount.trim()) {
      formErrors.amount = "Expense amount is required.";
      isValid = false;
    } else if (!/^\d*\.?\d+$/.test(formData.amount)) {
      formErrors.amount = "Expense amount must be a valid number.";
      isValid = false;
    } else if (parseFloat(formData.amount) <= 0) {
      formErrors.amount = "Expense amount must be greater than 0.";
      isValid = false;
    }
  }

  if (formFields.category) {
    if (!formData.category) {
      formErrors.category = "Please select a category.";
      isValid = false;
    }
  }

  setErrors(formErrors);
  return isValid;
};
