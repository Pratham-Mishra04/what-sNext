/* eslint-disable default-case */
import Project from '@/models/projectsModel';
import { connectToDB, disconnectFromDB } from '@/managers/DB';
import Protect from '@/utils/protect';

const getAllProjects = async (req, res) => {
  await connectToDB();
  const projects = await Project.find();
  await disconnectFromDB();
  console.log("Request Mde")
  res.status(200).json({
    data: projects,
  });
};

const addProject = async (req, res) => {
  await connectToDB();
  const project = await Project.create(req.body);
  await disconnectFromDB();
  res.status(200).json({
    data: project,
  });
};

const handler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getAllProjects(req, res);
      break;
    case 'POST':
      await addProject(req, res);
      break;
  }
};

export default handler;
