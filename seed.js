import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import connectDB from "./src/config/db.js";

import Exam from "./src/models/Exam.js";
import Subject from "./src/models/Subject.js";
import Chapter from "./src/models/Chapter.js";

const seedData = async () => {
  try {
    await connectDB();

    await Exam.deleteMany();
    await Subject.deleteMany();
    await Chapter.deleteMany();

    const jee = await Exam.create({ name: "JEE" });
    const neet = await Exam.create({ name: "NEET" });

    const physicsJEE = await Subject.create({
      name: "Physics",
      exam: jee._id
    });
    const mathJEE = await Subject.create({
      name: "Maths",
      exam: jee._id
    });
    const chemistryJEE = await Subject.create({
      name: "Chemistry",
      exam: jee._id
    });

    const physicsNEET = await Subject.create({
      name: "Physics",
      exam: neet._id
    });
    const chemistryNEET = await Subject.create({
      name: "Chemistry",
      exam: neet._id
    });
    const biologyNEET = await Subject.create({
      name: "Biology",
      exam: neet._id
    });

    await Chapter.insertMany([
      { name: "SETS, RELATIONS AND FUNCTIONS", subject: mathJEE._id },
      { name: "COMPLEX NUMBERS AND QUADRATIC EQUATIONS", subject: mathJEE._id },
      { name: "MATRICES AND DETERMINANTS", subject: mathJEE._id },
      { name: "PERMUTATIONS AND COMBINATIONS", subject: mathJEE._id },
      { name: "BINOMIAL THEOREM AND ITS SIMPLE APPLICATIONS", subject: mathJEE._id },
      { name: "SEQUENCE AND SERIES", subject: mathJEE._id },
      { name: "LIMIT, CONTINUITY AND DIFFERENTIABILITY", subject: mathJEE._id },
      { name: "INTEGRAL CALCULUS", subject: mathJEE._id },
      { name: "DIFFERENTIAL EQUATIONS", subject: mathJEE._id },
      { name: "COORDINATE GEOMETRY", subject: mathJEE._id },
      { name: "THREE-DIMENSIONAL GEOMETRY", subject: mathJEE._id },
      { name: "VECTOR ALGEBRA", subject: mathJEE._id },
      { name: "STATISTICS AND PROBABILITY", subject: mathJEE._id },
      { name: "TRIGONOMETRY", subject: mathJEE._id },
      { name: "Units and Measurements", subject: physicsJEE._id },
      { name: "Kinematics", subject: physicsJEE._id },
      { name: "Laws of Motion", subject: physicsJEE._id },
      { name: "Work, Energy and Power", subject: physicsJEE._id },
      { name: "Rotational Motion", subject: physicsJEE._id },
      { name: "Gravitation", subject: physicsJEE._id },
      { name: "Properties of Solids and Liquids", subject: physicsJEE._id },
      { name: "Thermodynamics", subject: physicsJEE._id },
      { name: "Kinetic Theory of Gases", subject: physicsJEE._id },
      { name: "Oscillations and Waves", subject: physicsJEE._id },
      { name: "Electrostatics", subject: physicsJEE._id },
      { name: "Current Electricity", subject: physicsJEE._id },
      { name: "Magnetic Effects of Current and Magnetism", subject: physicsJEE._id },
      { name: "Electromagnetic Induction and Alternating Currents", subject: physicsJEE._id },
      { name: "Electromagnetic Waves", subject: physicsJEE._id },
      { name: "Optics", subject: physicsJEE._id },
      { name: "Dual Nature of Matter and Radiation", subject: physicsJEE._id },
      { name: "Atoms and Nuclei", subject: physicsJEE._id },
      { name: "Electronic Devices", subject: physicsJEE._id },
      { name: "Experimental Skills", subject: physicsJEE._id },
      { name: "Some Basic Concepts in Chemistry", subject: chemistryJEE._id },
      { name: "Atomic Structure", subject: chemistryJEE._id },
      { name: "Chemical Bonding and Molecular Structure", subject: chemistryJEE._id },
      { name: "Chemical Thermodynamics", subject: chemistryJEE._id },
      { name: "Solutions", subject: chemistryJEE._id },
      { name: "Equilibrium", subject: chemistryJEE._id },
      { name: "Redox Reactions and Electrochemistry", subject: chemistryJEE._id },
      { name: "Chemical Kinetics", subject: chemistryJEE._id },
      { name: "Classification of Elements and Periodicity in Properties", subject: chemistryJEE._id },
      { name: "p-Block Elements", subject: chemistryJEE._id },
      { name: "d- and f-Block Elements", subject: chemistryJEE._id },
      { name: "Coordination Compounds", subject: chemistryJEE._id },
      { name: "Purification and Characterisation of Organic Compounds", subject: chemistryJEE._id },
      { name: "Some Basic Principles of Organic Chemistry", subject: chemistryJEE._id },
      { name: "Hydrocarbons", subject: chemistryJEE._id },
      { name: "Organic Compounds Containing Halogens", subject: chemistryJEE._id },
      { name: "Organic Compounds Containing Oxygen", subject: chemistryJEE._id },
      { name: "Organic Compounds Containing Nitrogen", subject: chemistryJEE._id },
      { name: "Biomolecules", subject: chemistryJEE._id },
      { name: "Principles Related to Practical Chemistry", subject: chemistryJEE._id },
      { name: "PHYSICS AND MEASUREMENT", subject: physicsNEET._id },
      { name: "KINEMATICS", subject: physicsNEET._id },
      { name: "LAWS OF MOTION", subject: physicsNEET._id },
      { name: "WORK, ENERGY AND POWER", subject: physicsNEET._id },
      { name: "ROTATIONAL MOTION", subject: physicsNEET._id },
      { name: "GRAVITATION", subject: physicsNEET._id },
      { name: "PROPERTIES OF SOLIDS AND LIQUIDS", subject: physicsNEET._id },
      { name: "THERMODYNAMICS", subject: physicsNEET._id },
      { name: "KINETIC THEORY OF GASES", subject: physicsNEET._id },
      { name: "OSCILLATIONS AND WAVES", subject: physicsNEET._id },
      { name: "ELECTROSTATICS", subject: physicsNEET._id },
      { name: "CURRENT ELECTRICITY", subject: physicsNEET._id },
      { name: "MAGNETIC EFFECTS OF CURRENT AND MAGNETISM", subject: physicsNEET._id },
      { name: "ELECTROMAGNETIC INDUCTION AND ALTERNATING CURRENTS", subject: physicsNEET._id },
      { name: "ELECTROMAGNETIC WAVES", subject: physicsNEET._id },
      { name: "OPTICS", subject: physicsNEET._id },
      { name: "DUAL NATURE OF MATTER AND RADIATION", subject: physicsNEET._id },
      { name: "ATOMS AND NUCLEI", subject: physicsNEET._id },
      { name: "ELECTRONIC DEVICES", subject: physicsNEET._id },
      { name: "EXPERIMENTAL SKILLS", subject: physicsNEET._id },
      { name: "SOME BASIC CONCEPTS IN CHEMISTRY", subject: chemistryNEET._id },
      { name: "ATOMIC STRUCTURE", subject: chemistryNEET._id },
      { name: "CHEMICAL BONDING AND MOLECULAR STRUCTURE", subject: chemistryNEET._id },
      { name: "CHEMICAL THERMODYNAMICS", subject: chemistryNEET._id },
      { name: "SOLUTIONS", subject: chemistryNEET._id },
      { name: "EQUILIBRIUM", subject: chemistryNEET._id },
      { name: "REDOX REACTIONS AND ELECTROCHEMISTRY", subject: chemistryNEET._id },
      { name: "CHEMICAL KINETICS", subject: chemistryNEET._id },
      { name: "CLASSIFICATION OF ELEMENTS AND PERIODICITY IN PROPERTIES", subject: chemistryNEET._id },
      { name: "p-BLOCK ELEMENTS", subject: chemistryNEET._id },
      { name: "d- AND f-BLOCK ELEMENTS", subject: chemistryNEET._id },
      { name: "COORDINATION COMPOUNDS", subject: chemistryNEET._id },
      { name: "PURIFICATION AND CHARACTERISATION OF ORGANIC COMPOUNDS", subject: chemistryNEET._id },
      { name: "SOME BASIC PRINCIPLES OF ORGANIC CHEMISTRY", subject: chemistryNEET._id },
      { name: "HYDROCARBONS", subject: chemistryNEET._id },
      { name: "ORGANIC COMPOUNDS CONTAINING HALOGENS", subject: chemistryNEET._id },
      { name: "ORGANIC COMPOUNDS CONTAINING OXYGEN", subject: chemistryNEET._id },
      { name: "ORGANIC COMPOUNDS CONTAINING NITROGEN", subject: chemistryNEET._id },
      { name: "BIOMOLECULES", subject: chemistryNEET._id },
      { name: "PRINCIPLES RELATED TO PRACTICAL CHEMISTRY", subject: chemistryNEET._id },
      { name: "DIVERSITY IN LIVING WORLD", subject: biologyNEET._id },
      { name: "STRUCTURAL ORGANISATION IN ANIMALS AND PLANTS", subject: biologyNEET._id },
      { name: "CELL STRUCTURE AND FUNCTION", subject: biologyNEET._id },
      { name: "PLANT PHYSIOLOGY", subject: biologyNEET._id },
      { name: "HUMAN PHYSIOLOGY", subject: biologyNEET._id },
      { name: "REPRODUCTION", subject: biologyNEET._id },
      { name: "GENETICS AND EVOLUTION", subject: biologyNEET._id },
      { name: "BIOLOGY AND HUMAN WELFARE", subject: biologyNEET._id },
      { name: "BIOTECHNOLOGY AND ITS APPLICATIONS", subject: biologyNEET._id },
      { name: "ECOLOGY AND ENVIRONMENT", subject: biologyNEET._id },

    ]);

    console.log("Syllabus seeded successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();
