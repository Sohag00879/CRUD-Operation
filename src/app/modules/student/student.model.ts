import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String
  },
  fatherOccupation: {
    type: String
  },
  fatherContactNo: {
    type: String
  },
  motherName: {
    type: String
  },
  motherOccupation: {
    type: String
  },
  motherContactNo: {
    type: String
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String
  },
  occupation: {
    type: String
  },
  contactNo: {
    type: String
  },
  address: {
    type: String
  },
});

const studentSchema = new Schema<Student>({
  id: { 
    type:String
  },
  name: {
    type:userNameSchema
  },
  gender: {
    type:String,
    enum:['male','female','other']
  },
  dateOfBirth: { 
    type:String
   },
  email: {
    type: String
  },
  contactNo: {
    type: String
  },
  emergencyContactNo: {
    type: String
  },
  bloodGroup: {
    type:String,
    enum:['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  },
  presentAddress: {
    type: String
  },
  permanentAddress: {
    type: String
  },
  guardian: {
    type:guardianSchema
  },
  localGuardian: {
    type:localGuardianSchema
  },
  profileImg: {
    type: String
  },
  isActive: {
    type:String,
    enum:['active', 'blocked'],
    default:'active'
  },
});

export const StudentModel = model<Student>('Student', studentSchema);

