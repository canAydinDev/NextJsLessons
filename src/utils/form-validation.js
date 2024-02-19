

export const getYupErrors = (errors) => {
      const errObj = {};
      errors.forEach(error => (errObj[error.path] = error.message));
      console.log(errObj);
      return {
        message: "",
        errors: errObj
      }
}

export const convertFormDataToJson = (formData) => Object.fromEntries(formData.entries());
