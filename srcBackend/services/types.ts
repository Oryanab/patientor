// diagnoseRouter
export type Code = string;
export type Name = string;
export type Latin = string;

export interface DiagnoseEntry {
  code: Code;
  name: Name;
  latin?: Latin;
}

// patientsRouter
export type Id = string;
export type DateOfBirth = string;
export type Ssn = string;
export type Gender = string;
export type Occupation = string;

export interface PatientEntry {
  id: Id;
  name: Name;
  dateOfBirth: DateOfBirth;
  ssn: Ssn;
  gender: Gender;
  occupation: Occupation;
}

export type ExcludeSSNPatientEntry = Omit<PatientEntry, "ssn">;
