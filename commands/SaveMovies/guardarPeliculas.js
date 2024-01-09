const { SlashCommandBuilder } = require('discord.js');
const db = require('../../database');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('peliculas-favoritas')
    .setDescription('Guarda tus peliculas favoritas!')
    .addStringOption(option => option
      .setName('titulo')
      .setDescription('Nombre de la pelicula')
      .setRequired(true),
    ),
  async execute(interaction) {
    const id = interaction.user.id;
    const titulo = interaction.options.getString('titulo');
    const CreateUserStmlt = db.prepare(`
    INSERT INTO FavMovies (Movie_title, user_id) VALUES (?, ?)
    `);
    CreateUserStmlt.run(titulo, id);
    console.log(titulo, id);
    await interaction.reply('Tu pelicula ha sido guardada!');
  },

};
