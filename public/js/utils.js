function parseFormData($form) {
  let result = {};
  const data = $form.serializeArray();

  data.forEach((element) => {
    result[element.name] = element.value;
  });

  return result;
}
