const db = require('.');

const CreateMovies = () => {
  const deleteStmt = db.prepare(`
  DROP TABLE IF EXISTS FavMovies
  `);
  deleteStmt.run();
  const stmt = db.prepare(`
  CREATE TABLE FavMovies (
    user_id TEXT,
    Movie_title TEXT NOT NULL
  )
  `);
  stmt.run();
};

const CreateTable = () => {
  CreateMovies();
};
CreateTable();