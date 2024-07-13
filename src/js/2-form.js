// Class for storing form input field data to the local Storage.

class FeedbackFormState {
    static localStorageKey = 'feedback-form-state';
  
    #form = {}; 
    #inputs = []; 
    #formData = {}; 
  
    constructor(form) {
      if (form) this.#inputs = form.querySelectorAll('input, textarea');
      this.#form = form;
  
      if (this.#inputs) {
        this.#form.addEventListener('submit', this.onSubmitForm.bind(this));
        this.#form.addEventListener('input', this.onInput.bind(this));
      }
    }

    destroy() {
      if (this.#inputs) {
        this.#form.removeEventListener('submit', this.onSubmitForm.bind(this));
        this.#form.removeEventListener('input', this.onInput.bind(this));
      }
    }
  
    restoreData() {
      this.#getDataFromLocalStorage();
      this.#insertDataToForm();
    }

    onInput(event) {
      this.#inputs.forEach(input => {
        if (input.name) {
          this.#formData[input.name] =
            event.currentTarget.elements[input.name].value.trim();
        }
      });

      this.#saveDataToStorage();
    }
  
    onSubmitForm(event) {
      event.preventDefault();
      if (!this.#isFormFilled()) {
        return alert('Fill please all fields');
      }
      console.log('submit data: ', this.#formData);
      localStorage.removeItem(FeedbackFormState.localStorageKey);
      this.#formData = {};
      event.currentTarget.reset();
    }
  
    #getDataFromLocalStorage() {
      const strSavedData = localStorage.getItem(
        FeedbackFormState.localStorageKey
      );
      this.#formData = strSavedData ? JSON.parse(strSavedData) : {};
    }
  
    #insertDataToForm() {
      const dataKeys = Object.keys(this.#formData);
  
      dataKeys.forEach(key => {
        if (this.#form.elements[key]) {
          this.#form.elements[key].value = this.#formData[key];
        }
      });
    }
  
    #saveDataToStorage() {
      localStorage.setItem(
        FeedbackFormState.localStorageKey,
        JSON.stringify(this.#formData)
      );
    }
  
    #isFormFilled() {
      let result = true;
      this.#inputs.forEach(input => {
        result &&= this.#form.elements[input.name].value.trim();
      });
      return result;
    }
  }
  
const feedbackForm = document.querySelector('.feedback-form');
const formstate = new FeedbackFormState(feedbackForm);
formstate.restoreData();
