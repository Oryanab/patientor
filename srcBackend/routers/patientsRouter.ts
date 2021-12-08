import express from "express";
import patients from "../data/patients";
import { ExcludeSSNPatientEntry } from "../services/types";

const patientsRouter = express.Router();

const getDiagnoses = (): ExcludeSSNPatientEntry[] => {
  const noSSNpatients: ExcludeSSNPatientEntry[] = patients.map(
    ({ id, name, dateOfBirth, gender, occupation }) => {
      return { id, name, dateOfBirth, gender, occupation };
    }
  );
  return noSSNpatients;
};

patientsRouter.get("/", (_req, res) => {
  res.send(getDiagnoses());
});

export default patientsRouter;
