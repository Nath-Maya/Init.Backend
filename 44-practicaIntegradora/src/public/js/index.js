function formToObject(formDoc) {
  var formData = $(formDoc).serializeArray();
  var formObject = {};

  $(formData).each(function(_index, obj){
    formObject[obj.name] = obj.value;
  });

  return formObject;
}