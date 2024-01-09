const { default: axios } = require('axios');
const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('buscar-peliculas')
    .setDescription('Busca una pelicula!')
    .addStringOption(option => option
      .setName('nombre-pelicula')
      .setDescription('El nombre de la pelicula a buscar')
      .setRequired(true),
    ),
  async execute(interaction) {
    const movieName = interaction.options.getString('nombre-pelicula');
    console.log(movieName);
    const { data } = await axios.get(`http://www.omdbapi.com/?t=${movieName}&apikey=94029148`);
    console.log(data);
    console.log(data.Year);
    console.log(data.Genre);
    console.log(data.Plot);
    console.log(data.Poster);
    console.log(data.Ratings[1].Value);
    const exampleEmbed = new EmbedBuilder()
      .setColor('Aqua')
      .setTitle(String(data.Title))
      .setDescription(String(data.Plot))
      .addFields(
        { name: 'Generos:', value:String(data.Genre) },
        { name: '\u200B', value: '\u200B' },
        { name: 'Actores', value: String(data.Actors), inline: true },
        { name: 'Director/a', value: String(data.Director), inline: true },
      )
      .addFields({ name: 'Rotten Tomatoes', value: String(data.Ratings[1].Value), inline: true })
      .setImage(data.Poster)
      .setTimestamp();

    interaction.channel.send({ embeds: [exampleEmbed] });
  },
};