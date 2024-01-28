import { useEffect, useState } from "react";

export const useValidation = (value, validations) => {

   const [errors, setErrors] = useState([]);

   useEffect(() => {

      const errors = [];

      for (const validation in validations){
         switch (validation) {
            case 'isEmpty':
               if (!value) {
                  errors.push('Поле не может быть пустым. ')
               }
               break;
            case 'minLength':
               if (value && value.length < validations[validation]) {
                  errors.push(`Минимальное количество символов ${validations[validation]}. `)
               }
               break;
            case 'maxLength':
               if (value && value.length > validations[validation]) {
                  errors.push(`Максимальное количество символов ${validations[validation]}. `)
               }
               break
            case 'isEmail':
               const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               if (!re.test(String(value).toLowerCase())) {
                  errors.push('Некорректный E-mail. ')
               }
               break
            case 'isName':
               const letters = /^[А-яЁёA-Za-z -]+$/;
               if(!letters.test(String(value).toLowerCase())) {
                  errors.push('Поле должно содержит только латиницу, кириллицу, пробел или дефис.')
               }
               break
            default: break
         }
      }

      setErrors(errors);

   }, [value])

   return {
      errors
   }
}

export const useInput = (initialValue, validations) => {
   const [value, setValue] = useState(initialValue);
   const [isDirty, setDirty] = useState(false);
   const valid = useValidation(value, validations);

   const onChange = (e) => {
      setValue(e.target.value)
   }

   const onBlur = (e) => {
      setDirty(true)
   }

   return {
      value,
      onChange,
      onBlur,
      isDirty,
      ...valid
   }
}