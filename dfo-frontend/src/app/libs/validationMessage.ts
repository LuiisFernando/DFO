export const validationMessage = {
    required: () => 'The field is required',

    minlength: (error: any) => 'Min length to this field is ' + error.requiredLength,

    maxlength: (error: any) => 'Max length to this field is ' + error.requiredLength,

    min: (error: any) => 'Min value to field Age is ' + error.min,

    max: (error: any) => 'Max value to field Age is ' + error.max,
}