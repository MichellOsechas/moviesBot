const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ayuda')
    .setDescription('Obten ayuda para utilizar el bots'),
  async execute(interaction) {
    await interaction.reply('Puedes buscar la pelicula que deseas con: /buscarPeliculas, si deseas guardar tus peliculas favoritas puedes usar: /guardar peliculas para que las puedas buscar en cualquier momento y si quieres acceder a todas las peliculas que has guardado, puedes usar: /ObtenerPeliculas.');
  },
};