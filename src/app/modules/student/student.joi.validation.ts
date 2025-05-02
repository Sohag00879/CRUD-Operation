
import Joi from 'joi';

const userNameValidationSchema = Joi.object({
    firstName: Joi.string()
      .required()
      .trim()
      .max(20)
      .pattern(/^[A-Z][a-z]*$/, { name: 'capitalized' })
      .messages({
        'string.pattern.base':
          'First Name should start with a capital letter',
      }),
    middleName: Joi.string().trim(),
    lastName: Joi.string()
      .required()
      .trim()
      .pattern(/^[a-zA-Z]+$/, { name: 'alphabetical' })
      .messages({
        'string.pattern.base':
          'Last Name should only contain alphabetical characters',
      }),
  });

  const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().required().trim(),
    fatherOccupation: Joi.string().required().trim(),
    fatherContactNo: Joi.string().required().trim(),
    motherName: Joi.string().required().trim(),
    motherOccupation: Joi.string().required().trim(),
    motherContactNo: Joi.string().required().trim(),
  });

  const localGuardianValidationSchema = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().required().trim(),
    contactNo: Joi.string().required().trim(),
    address: Joi.string().required().trim(),
  });

  const studentValidationSchema = Joi.object({
    id: Joi.string().required().trim(),
    name: userNameValidationSchema.required(),
    gender: Joi.string().valid('male', 'female', 'other').required().trim(),
    dateOfBirth: Joi.string().required().trim(),
    email: Joi.string().email().required().trim(),
    contactNo: Joi.string().required().trim(),
    emergencyContactNo: Joi.string().required().trim(),
    bloodGroup: Joi.string()
      .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
      .trim(),
    presentAddress: Joi.string().required().trim(),
    permanentAddress: Joi.string().required().trim(),
    guardian: guardianValidationSchema.required(),
    localGuardian: localGuardianValidationSchema.required(),
    profileImg: Joi.string().trim(),
    isActive: Joi.string().valid('active', 'blocked').default('active'),
  });

  export default  studentValidationSchema;