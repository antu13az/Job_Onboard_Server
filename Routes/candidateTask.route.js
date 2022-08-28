const router = require("express").Router();
const {
  submitTaskFromCandidate,
  getAllCandidatesTask
} = require("../Controllers/candidateTask.controller");


const VerifyToken = require("../VerifyToken/VerifyToken");
router.post("/submitCandidateTask", VerifyToken, submitTaskFromCandidate);
router.get('/' , getAllCandidatesTask)
module.exports=router