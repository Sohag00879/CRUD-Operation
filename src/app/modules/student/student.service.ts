
import { Student } from "./student.interface";
import { StudentModel } from "./student.model";
// const createStudentIntoDB = async (student: Student) => {
//   const result = await StudentModel.create(student);//built in static method
//   return result;
// };

const createStudentIntoDB = async (studentData : Student) =>{
  const student = new StudentModel(studentData)//create an instance
  const result = await student.save() //built in instance method
  return result;
}


const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  // const result = await StudentModel.find({id : id})
  const result = await StudentModel.find({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
