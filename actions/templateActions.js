import templateApi from "../apis/TemplateAPI";

export const ACTION_TYPES = {
    ADD_TEMPLATE: "ADD_TEMPLATE",
    GET_ALL_TEMPLATES: "GET_ALL_TEMPLATES",
    DELETE_TEMPLATE: "DELETE_TEMPLATE"
  };

export const addTemplate = (data, OnSuccess, OnFailure) => (dispatch) => {
    console.log(data);
    templateApi
      .auth()
      .addTemplate(data)
      .then((response) => {
  
        dispatch({
          type: ACTION_TYPES.ADD_TEMPLATE,
          payload: response.data,
        });
        OnSuccess();
      })
      .catch(() => {
        OnFailure();
      });
  };

  export const viewTemplate = () => (dispatch) => {
    templateApi
    .auth()
    .viewTemplate()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_ALL_TEMPLATES,
        payload: response.data,
      });
    });
  };

  export const deleteTemplate =
  (id) => (dispatch) => {
    templateApi
      .auth()
      .deleteTemplate(id)
      .then(() => {
        dispatch({
          type: ACTION_TYPES.DELETE_TEMPLATE,
          payload: {id},
        });
       
      })
      .catch(() => {

      });
  };
