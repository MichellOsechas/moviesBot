const { SlashCommandBuilder } = require('discord.js');
const db = require('../../database');
const AsciiTable = require('ascii-table');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('obtener-peliculas')
    .setDescription('Obten las peliculas favoritas de tu usuario!'),
  async execute(interaction) {
    const id = interaction.user.id;
    // Get uset form db
    const movies = db.prepare(`
    SELECT * FROM FavMovies
    WHERE user_id = ?
    `).all(id);
    const lala = movies.map(movie => [movie.Movie_title]);
    console.log(lala);

    const table = AsciiTable.factory({
      title: 'Tus peliculas favoritas',
      heading: ['Title'],
      rows: lala,
    });

    if (!movies) {
      return await interaction.reply('Su peliculas no existen');
    }

    await interaction.reply(table.toString());

  } };